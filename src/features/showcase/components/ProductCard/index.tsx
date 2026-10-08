import React from 'react';
import type { Product } from '../../types';
import { formatCurrency } from '../../../../shared/utils/formatCurrency';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  const originalPrice = product.price * 1.15;
  const installmentPrice = product.price / 2;

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={product.photo} 
          alt={`Foto do produto ${product.productName}`} 
          loading="lazy" 
        />
      </div>

      <h3 className={styles.productName}>{product.productName}</h3>
      <p className={styles.description}>{product.descriptionShort}</p>

      <div className={styles.pricing}>
        <span className={styles.oldPrice}>{formatCurrency(originalPrice)}</span>
        <strong className={styles.currentPrice}>{formatCurrency(product.price)}</strong>
        <span className={styles.installments}>
          ou 2x de {formatCurrency(installmentPrice)} sem juros
        </span>
      </div>

      <span className={styles.shipping}>Frete grátis</span>

      <button
        type="button"
        className={styles.buyButton}
        onClick={() => onOpenModal(product)}
        aria-label={`Ver detalhes e comprar ${product.productName}`}
      >
        COMPRAR
      </button>
    </article>
  );
};