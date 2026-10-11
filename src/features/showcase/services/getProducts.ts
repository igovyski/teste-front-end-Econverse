import type { Product, ProductsResponse } from '../types';

/**
 * Busca a lista de produtos. Lança em caso de falha de rede ou resposta
 * inválida — quem consome decide como apresentar o erro.
 */
export async function getProducts(): Promise<readonly Product[]> {
  const response = await fetch('/produtos.json');

  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
  }

  const data = (await response.json()) as ProductsResponse;
  return data.products ?? [];
}