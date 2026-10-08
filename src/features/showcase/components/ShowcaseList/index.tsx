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
            &#10094;
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
            &#10095;
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