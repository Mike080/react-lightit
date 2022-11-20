export type ProductType = {
  id: string;
  title: string;
  text: string;
  img: string;
};

export type Products = ProductType[];

export type ProductState = {
  products: Products;
  isLoading: boolean;
  error: null;
};
