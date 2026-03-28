import { Category } from '@/hooks/useCatalogMenu';
import { axiosInstance } from '@/services/instance';

export async function fetchCategories(): Promise<Category[]> {
  try {
    const res = await axiosInstance.get<Category[]>('/categories');
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch categories');
  }
}
