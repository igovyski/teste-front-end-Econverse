export interface Product {
  readonly productName: string;
  readonly descriptionShort: string;
  readonly photo: string;
  readonly price: number;
}

export interface ProductsResponse {
  readonly success: boolean;
  readonly products: readonly Product[];
}