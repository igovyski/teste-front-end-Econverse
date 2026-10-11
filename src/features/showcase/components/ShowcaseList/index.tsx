import { useState, useId } from 'react';
import type { Product } from '../../types';
import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from '../ProductCard';
import { ProductModal } from '../ProductModal';
import styles from './ShowcaseList.module.scss';

const CATEGORIES: readonly string[] = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS',
];

const VISIBLE_CARDS = 4;
const CARD_WIDTH = 304;
const GAP = 18;
const STEP = CARD_WIDTH + GAP; // 322px

interface ShowcaseListProps {
  readonly title?: string;
  readonly showCategories?: boolean;
  readonly subtitle?: string;
  readonly onSubtitleClick?: () => void;
}

export function ShowcaseList({
  title = 'Produtos relacionados',
  showCategories = true,
  subtitle,
  onSubtitleClick,
}: Readonly<ShowcaseListProps> = {}) {
  const { products, isLoading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('CELULAR');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const titleId = useId();

  const maxIndex = Math.max(0, products.length - VISIBLE_CARDS);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section className={styles.showcaseSection} aria-labelledby={titleId}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <span className={styles.line} aria-hidden="true" />
          <h2 id={titleId} className={styles.title}>
            {title}
          </h2>
          <span className={styles.line} aria-hidden="true" />
        </div>

        {showCategories ? (
          <div role="group" aria-label="Categorias da vitrine">
            <ul className={styles.categoryList}>
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <li key={category}>
                    <button
                      type="button"
                      className={`${styles.categoryButton} ${isActive ? styles.active : ''}`}
                      onClick={() => setActiveCategory(category)}
                      aria-pressed={isActive}
                    >
                      {category}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          subtitle && (
            <button
              type="button"
              className={styles.viewAllButton}
              onClick={onSubtitleClick}
            >
              {subtitle}
            </button>
          )
        )}
      </header>

      {isLoading ? (
        <output className={styles.loadingMessage}>
          Carregando produtos...
        </output>
      ) : error ? (
        <p className={styles.errorMessage} role="alert">
          Não foi possível carregar os produtos. Tente novamente mais tarde.
        </p>
      ) : (
        <div
          className={styles.carouselContainer}
          role="region"
          aria-roledescription="carousel"
          aria-labelledby={titleId}
        >
          <output className={styles.visuallyHidden}>
            Exibindo produtos {Math.min(currentIndex + 1, products.length)} a{' '}
            {Math.min(currentIndex + VISIBLE_CARDS, products.length)} de {products.length}
          </output>
          <button
            type="button"
            className={`${styles.arrowButton} ${styles.prevArrow}`}
            onClick={handlePrev}
            aria-label="Ver produto anterior"
          >
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M7.46667 1.14424L6.33419 0L0 6.4L6.33419 12.8L7.46667 11.6558L2.26495 6.4L7.46667 1.14424Z"
                fill="#3F3F40"
              />
            </svg>
          </button>

          <div className={styles.carouselViewport}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${currentIndex * STEP}px)`,
              }}
            >
              {products.map((product, idx) => {
                const isVisible =
                  idx >= currentIndex && idx < currentIndex + VISIBLE_CARDS;

                return (
                  <div
                    key={`${product.productName}-${idx}`}
                    className={`${styles.cardWrapper} ${
                      isVisible ? styles.visibleCard : styles.hiddenCard
                    }`}
                  >
                    <ProductCard
                      product={product}
                      onOpenModal={setSelectedProduct}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.arrowButton} ${styles.nextArrow}`}
            onClick={handleNext}
            aria-label="Ver próximo produto"
          >
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
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
}