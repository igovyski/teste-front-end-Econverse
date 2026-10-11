import type { Product, ProductsResponse } from '../types';

export async function getProducts(): Promise<readonly Product[]> {
  try {
    const response = await fetch('/produtos.json');

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
    }

    const data = (await response.json()) as ProductsResponse;
    return data.products ?? [];
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    console.error('Falha ao carregar produtos:', errorMessage);
    return [];
  }
}