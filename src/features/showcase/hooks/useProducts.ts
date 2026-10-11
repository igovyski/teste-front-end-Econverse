import { useEffect, useState } from 'react';
import type { Product } from '../types';
import { getProducts } from '../services/getProducts';

interface UseProductsResult {
  readonly products: readonly Product[];
  readonly isLoading: boolean;
  readonly error: Error | null;
}

type ProductsState =
  | { readonly status: 'loading' }
  | { readonly status: 'success'; readonly products: readonly Product[] }
  | { readonly status: 'error'; readonly error: Error };

const EMPTY_PRODUCTS: readonly Product[] = [];

/** Promise compartilhada: garante um único fetch para todas as vitrines. */
let productsPromise: Promise<readonly Product[]> | null = null;

function loadProducts(): Promise<readonly Product[]> {
  productsPromise ??= getProducts().catch((error: unknown) => {
    // Descarta o cache para que uma montagem futura possa tentar novamente.
    productsPromise = null;
    throw error;
  });

  return productsPromise;
}

function toError(error: unknown): Error {
  return error instanceof Error ? error : new Error('Erro desconhecido ao carregar produtos');
}

export function useProducts(): UseProductsResult {
  const [state, setState] = useState<ProductsState>({ status: 'loading' });

  useEffect(() => {
    let isMounted = true;

    loadProducts().then(
      (products) => {
        if (isMounted) {
          setState({ status: 'success', products });
        }
      },
      (error: unknown) => {
        if (isMounted) {
          setState({ status: 'error', error: toError(error) });
        }
      },
    );

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    products: state.status === 'success' ? state.products : EMPTY_PRODUCTS,
    isLoading: state.status === 'loading',
    error: state.status === 'error' ? state.error : null,
  };
}

