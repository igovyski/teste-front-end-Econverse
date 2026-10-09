import React, { useEffect, useState, useRef } from 'react';
import type { Product } from '../../types';
import { getProducts } from '../../services/getProducts';
import { ProductCard } from '../ProductCard';
import { ProductModal } from '../ProductModal';
import styles from './ShowcaseList.module.scss';

const CATEGORIES = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS',
];

export const ShowcaseList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('CELULAR');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Falha ao carregar produtos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchItems();
  }, []);

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.showcaseSection}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <span className={styles.line} />
          <h2 className={styles.title}>Produtos relacionados</h2>
          <span className={styles.line} />
        </div>

        <nav aria-label="Categorias de produtos">
          <ul className={styles.categoryList}>
            {CATEGORIES.map((category) => (
              <li key={category}>
                <button
                  type="button"
                  className={`${styles.categoryButton} ${
                    activeCategory === category ? styles.active : ''
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {isLoading ? (
        <p className={styles.loadingMessage}>Carregando produtos...</p>
      ) : (
        <div className={styles.carouselContainer}>
          <button
            type="button"
            className={`${styles.arrowButton} ${styles.prevArrow}`}
            onClick={handleScrollLeft}
            aria-label="Ver produtos anteriores"
          >
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.46667 1.14424L6.33419 0L0 6.4L6.33419 12.8L7.46667 11.6558L2.26495 6.4L7.46667 1.14424Z"
                fill="#3F3F40"
              />
            </svg>
          </button>

          <div className={styles.carousel} ref={carouselRef}>
            {products.map((product) => (
              <ProductCard
                key={product.productName}
                product={product}
                onOpenModal={setSelectedProduct}
              />
            ))}
          </div>

          <button
            type="button"
            className={`${styles.arrowButton} ${styles.nextArrow}`}
            onClick={handleScrollRight}
            aria-label="Ver próximos produtos"
          >
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.46667 1.14424L6.33419 0L0 6.4L6.33419 12.8L7.46667 11.6558L2.26495 6.4L7.46667 1.14424Z"
                fill="#3F3F40"
              />
            </svg>
          </button>
        </div>
      )}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};