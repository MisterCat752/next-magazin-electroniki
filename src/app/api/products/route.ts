import { NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';
import { getAllCategoryIds } from '@/lib/api/getAllCategoryIds';
import type {
  Prisma,
  Product,
  ProductVariant,
  Specification,
  Filter,
} from '@prisma/client';

interface SpecFilter {
  name: string;
  value: string;
}
interface VariantWithSpecs extends ProductVariant {
  specifications: Specification[];
}

interface ProductResponse {
  id: number;
  name: string;
  imageUrl: string | null;
  variants: VariantWithSpecs[];
  price: number;
  filters: {
    id: number;
    value: string;
    filterId: number;
  }[];
}
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const minPrice = Number(searchParams.get('minPrice') ?? 0);
    const maxPrice = Number(
      searchParams.get('maxPrice') ?? Number.MAX_SAFE_INTEGER,
    );
    const categorySlug = searchParams.get('category');
    const specParam = searchParams.get('specs'); // specifications: "Цвет:Синий,Память:16GB" (URLEncoded)
    const sortParam = searchParams.get('sort');

    const page = Number(searchParams.get('page') ?? 1);
    const limit = Number(searchParams.get('limit') ?? 10);

    const skip = (page - 1) * limit;
    if (!categorySlug)
      return NextResponse.json({ error: 'Category required' }, { status: 400 });

    // Парсим specs и декодируем компоненты
    // Пример входа (клиент отправляет): encodeURIComponent(name):encodeURIComponent(value),...
    const specFilters: SpecFilter[] = specParam
      ? specParam
          .split(',')
          .map((s) => {
            const idx = s.indexOf(':');
            if (idx === -1) return null;
            try {
              return {
                name: decodeURIComponent(s.slice(0, idx)),
                value: decodeURIComponent(s.slice(idx + 1)),
              };
            } catch {
              return null;
            }
          })
          .filter((v): v is SpecFilter => v !== null)
      : [];

    const category = await prisma.category.findUnique({
      where: { slug: categorySlug },
      select: { id: true },
    });

    if (!category) {
      return NextResponse.json({ products: [] });
    }

    // 🔥 получаем id текущей + всех подкатегорий
    const categoryIds: string[] = await getAllCategoryIds(prisma, category.id);

    // 🔥 фильтр сразу по всем категориям
    const whereClause: Prisma.ProductWhereInput = {
      categoryId: { in: categoryIds },
    };
    // Variant-level specs
    if (specFilters.length > 0) {
      // Группируем по имени спецификации: внутри одной группы — OR по значениям,
      // между группами — AND. И всё это в рамках одного variant (то есть одна вариация должна иметь все группы).
      const specsByName: Record<string, Set<string>> = {};
      for (const { name, value } of specFilters) {
        specsByName[name] = specsByName[name] || new Set();
        specsByName[name].add(value);
      }

      const variantConditions = Object.entries(specsByName).map(
        ([name, valuesSet]) => ({
          specifications: {
            some: {
              name,
              value: { in: Array.from(valuesSet) },
            },
          },
        }),
      );

      // Важный момент: здесь мы ставим AND — т.е. одна вариация должна удовлетворять всем условием
      whereClause.variants = {
        some: {
          AND: variantConditions,
        },
      };
    }
    const total = await prisma.product.count({
      where: whereClause,
    });
    const products = await prisma.product.findMany({
      where: {
        categoryId: { in: categoryIds },
        variants: {
          some: {
            price: {
              gte: minPrice,
              lte: maxPrice,
            },
            ...(whereClause.variants?.some
              ? { AND: whereClause.variants.some.AND }
              : {}),
          },
        },
      },
      include: {
        variants: { include: { specifications: true } },
        filters: true,
      },
      skip,
      take: limit,
    });

    const mappedProducts: ProductResponse[] = products.map((p) => ({
      id: p.id,
      name: p.name,
      imageUrl: p.imageUrl,
      variants: p.variants,
      price: p.variants.length
        ? Math.min(...p.variants.map((v) => v.price))
        : 0,
      filters: p.filters,
    }));

    // 2. Сортируем
    if (sortParam === 'price_asc') {
      mappedProducts.sort((a, b) => a.price - b.price);
    }

    if (sortParam === 'price_desc') {
      mappedProducts.sort((a, b) => b.price - a.price);
    }

    return NextResponse.json({
      products: mappedProducts,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
