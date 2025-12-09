// lib/transform.ts
export type RawCategory = {
  id: string;
  name: string;
  slug?: string;
  parentId?: string | null;
  children?: RawCategory[];
};

export type CatalogSubCategory = {
  group: string;
  items: string[];
};

export type CatalogCategory = {
  id: string;
  name: string;
  icon?: string; // можно хранить string slug для выбора svg
  subcategories: CatalogSubCategory[];
};

export function transformCategories(raw: RawCategory[]): CatalogCategory[] {
  return raw.map((root) => {
    const subcategories: CatalogSubCategory[] = (root.children || []).map(
      (group) => {
        const items =
          group.children && group.children.length > 0
            ? group.children.map((c) => c.name)
            : // fallback: если нет детей — показать саму группу как один item
              [group.name];

        return {
          group: group.name,
          items,
        };
      }
    );

    return {
      id: root.id,
      name: root.name,
      icon: root.slug || root.name, // store slug or name — используем для иконок
      subcategories,
    };
  });
}
