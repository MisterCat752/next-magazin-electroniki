export type RawSpec = {
  name: string;
  value: string;
  groupId: number;
  sections?: any;
};
export function buildSpecs(specs: RawSpec[]) {
  return specs.map((spec) => ({
    name: spec.name,
    value: spec.value,
    groupId: spec.groupId,
  }));
}
