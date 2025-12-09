export type IProductVariants = {
  id: number;
  sku: string;
  price: number;
  stock: number;
  productId: number;
};

export type IProduct = {
  id: number;
  name: string;
  price: number;
  image?: string;
  variants: IProductVariants[];
};
