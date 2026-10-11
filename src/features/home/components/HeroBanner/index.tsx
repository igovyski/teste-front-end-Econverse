import defaultHeroBg from '../../../../../assets/images/banner-hero.png';
import styles from './HeroBanner.module.scss';

interface HeroBannerProps {
  readonly backgroundImage?: string;
  readonly onCtaClick?: () => void;
}

export function HeroBanner({
  backgroundImage = defaultHeroBg,
  onCtaClick,
}: Readonly<HeroBannerProps>) {
  return (
    <section
      className={styles.heroBanner}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%), url(${backgroundImage})`,
      }}
      aria-label="Banner promocional"
    >
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
          <button
            type="button"
            className={styles.ctaButton}
            onClick={onCtaClick}
            aria-label="Ver produtos em promoção"
          >
            Ver produto
          </button>
        </div>
      </div>
    </section>
  );
}