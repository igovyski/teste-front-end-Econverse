import React from 'react';
import styles from './HeroBanner.module.scss';

export const HeroBanner: React.FC = () => {
  return (
    <section className={styles.heroBanner} aria-label="Banner promocional">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Venha conhecer nossas
            <br />
            promoções
          </h1>
          <p className={styles.subtitle}>
            <span className={styles.highlight}>50% Off</span> nos produtos
          </p>
          <button type="button" className={styles.ctaButton}>
            Ver produto
          </button>
        </div>
      </div>
    </section>
  );
};