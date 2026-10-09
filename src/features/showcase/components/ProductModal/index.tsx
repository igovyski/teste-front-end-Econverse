import React, { useState } from "react";
import type { Product } from "../../types";
import { formatCurrency } from "../../../../shared/utils/formatCurrency";
import styles from "./ProductModal.module.scss";

interface ProductModalProps {
  product: Product | null;
  isOpen?: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen = true,
  onClose,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <dialog className={styles.overlay} open aria-modal="true">
      <button
        type="button"
        className={styles.backdrop}
        onClick={onClose}
        aria-label="Fechar modal"
      />

      <div className={styles.modal}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 1L13.5 12M13.5 1L1.5 12"
              stroke="#707070"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className={styles.imageWrapper}>
          <img
            src={product.photo}
            alt={product.productName}
            className={styles.productImage}
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>{product.productName}</h2>
          <span className={styles.price}>{formatCurrency(product.price)}</span>

          <p className={styles.description}>
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>

          <a href="#detalhes" className={styles.detailsLink}>
            Veja mais detalhes do produto &gt;
          </a>

          <div className={styles.actions}>
            <div className={styles.counter}>
              <button
                type="button"
                onClick={handleDecrease}
                disabled={quantity <= 1}
                className={styles.counterButton}
                aria-label="Diminuir quantidade"
              >
                <svg
                  width="14"
                  height="2"
                  viewBox="0 0 14 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1H12.8462"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    stroke={quantity > 1 ? "#271C47" : "#9F9F9F"}
                  />
                </svg>
              </button>

              <span className={styles.counterValue}>
                {String(quantity).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={handleIncrease}
                className={styles.counterButton}
                aria-label="Aumentar quantidade"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.92383 1V12.4545"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    stroke="#271C47"
                  />
                  <path
                    d="M1 6.72754H12.8462"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    stroke="#271C47"
                  />
                </svg>
              </button>
            </div>

            <button type="button" className={styles.buyButton}>
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};
