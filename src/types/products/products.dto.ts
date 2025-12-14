import { IProduct } from '../products.types';

export interface ProductsResponse {
  products: IProduct[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
