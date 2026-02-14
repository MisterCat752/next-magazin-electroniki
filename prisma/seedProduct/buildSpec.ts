export interface SpecInput {
  name: string;
  value: string | number;
  groupId: number;
}

type BuildSpecsInput = {
  presets: SpecInput[];
  replace?: (spec: SpecInput) => SpecInput | null;
  extra?: SpecInput[];
};

export default function buildSpecs({
  presets,
  replace,
  extra = [],
}: BuildSpecsInput): SpecInput[] {
  const processed = replace
    ? presets.map(replace).filter((s): s is SpecInput => Boolean(s))
    : presets;

  return [...processed, ...extra];
}
