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

export function makeSku(slug: string, mem: string, color?: string) {
  return `${slug}-${mem.replace(/\s/g, '')}-${color?.replace(/\s|\|/g, '')}`;
}
