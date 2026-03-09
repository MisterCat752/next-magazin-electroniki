import { PrismaClient } from '@prisma/client';

export async function findOption(
  prisma: PrismaClient,
  option: any,
  value: any,
) {
  const result = await prisma.optionValue.findFirst({
    where: { optionId: option.id, value },
  });
  if (!result) throw new Error(`OptionValue not found: ${value}`);
  return result.id;
}

export function makeSku(
  slug: string,
  mem?: string,
  color?: string,
  idx?: number,
) {
  const safeMem = mem ? mem.replace(/\s/g, '') : 'nomem';
  const safeColor = color ? color.replace(/\s|\|/g, '') : 'nocolor';
  const base = `${slug}-${safeMem}-${safeColor}`;
  return idx !== undefined ? `${base}-${idx}` : base;
}
