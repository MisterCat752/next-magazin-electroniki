// seedComponent/useSpec.ts
interface SpecInput {
  name: string;
  value: string | number;
  groupId: number; // или 'base' | 'display' и потом преобразовывать через map
}

type SpecsConfig = {
  sections: any;
  model: string;
  memory: string;
  color: string;
  items?: SpecInput[];
  sectionId?: number;
};

type BuildSpecsInput = {
  presets: SpecInput[][];
  extra?: SpecInput[];
  replace?: (spec: SpecInput) => SpecInput | null;
};

export default function buildSpecs({
  presets,
  extra = [],
  replace,
}: BuildSpecsInput): SpecInput[] {
  const flat = presets.flat();

  const processed = replace
    ? flat.map(replace).filter((s): s is SpecInput => Boolean(s))
    : flat;

  return [...processed, ...extra];
}
