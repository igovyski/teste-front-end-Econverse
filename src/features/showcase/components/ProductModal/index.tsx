import React, { useState } from 'react';
import type { Product } from '../../types';
import { formatCurrency } from '../../../../shared/utils/formatCurrency';
import styles from './ProductModal.module.scss';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className={styles.overlay}>
      <button 
        type="button" 
        className={styles.backdrop} 
        onClick={onClose} 
        aria-label="Fechar modal" 
      />

      <dialog open className={styles.modal}>
        <button 
          type="button" 
          className={styles.closeButton} 
          onClick={onClose}
          aria-label="Fechar janela"
        >
          &times;
        </button>

        <img 
          src={product.photo} 
          alt={product.productName} 
          className={styles.productImage} 
        />

        <div className={styles.content}>
          <h2 className={styles.title}>{product.productName}</h2>
          <p className={styles.price}>{formatCurrency(product.price)}</p>
          <p className={styles.description}>{product.descriptionShort}</p>
          
          <a href="#detalhes" className={styles.detailsLink}>
            Veja mais detalhes do produto &gt;
          </a>

          <div className={styles.actions}>
            <div className={styles.counter}>
              <button type="button" onClick={handleDecrease} aria-label="Diminuir quantidade">−</button>
              <span>{String(quantity).padStart(2, '0')}</span>
              <button type="button" onClick={handleIncrease} aria-label="Aumentar quantidade">+</button>
            </div>

            <button type="button" className={styles.buyButton}>
              COMPRAR
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};