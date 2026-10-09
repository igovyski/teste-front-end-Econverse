import React from 'react';
import type { Product } from '../../types';
import { formatCurrency } from '../../../../shared/utils/formatCurrency';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  const installmentPrice = product.price / 2;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={product.photo} alt={product.productName} loading="lazy" />
      </div>

      <h3 className={styles.title}>{product.productName}</h3>
      <p className={styles.description}>{product.descriptionShort}</p>

      <span className={styles.oldPrice}>
        {formatCurrency(product.price * 1.15)}
      </span>

      <span className={styles.price}>
        {formatCurrency(product.price)}
      </span>

      <span className={styles.installments}>
        ou 2x de {formatCurrency(installmentPrice)} sem juros
      </span>

      <span className={styles.freeShipping}>Frete grátis</span>

      <button
        type="button"
        className={styles.buyButton}
        onClick={() => onOpenModal(product)}
      >
        COMPRAR
      </button>
    </article>
  );
};