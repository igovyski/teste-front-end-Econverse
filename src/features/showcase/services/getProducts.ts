import type { Product, ProductsResponse } from '../types/index.ts';

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch('/produtos.json');

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const data: ProductsResponse = await response.json();
    return data.products || [];
  } catch (error) {
    console.error('Falha ao carregar produtos:', error);
    return [];
  }
}