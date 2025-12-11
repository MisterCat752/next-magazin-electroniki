export interface BaseProductInput {
  name: string;
  slug: string;
  categoryId: number;
  memory: string;
  color: string;
  sim?: string;
  display: string;
  weight: string;
  processor?: string;
}
