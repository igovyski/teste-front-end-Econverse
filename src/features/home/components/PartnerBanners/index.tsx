import defaultBannerBg from '@/assets/images/banner-parceiros.png';
import styles from './PartnerBanners.module.scss';

export interface BannerItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly buttonText: string;
  readonly href: string;
  readonly bgImage?: string;
}

interface PartnerBannersProps {
  readonly banners?: readonly BannerItem[];
}

const DEFAULT_BANNERS: readonly BannerItem[] = [
  {
    id: 'banner-1',
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    buttonText: 'CONFIRA',
    href: '#parceiros',
    bgImage: defaultBannerBg,
  },
  {
    id: 'banner-2',
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    buttonText: 'CONFIRA',
    href: '#parceiros',
    bgImage: defaultBannerBg,
  },
];

export function PartnerBanners({
  banners = DEFAULT_BANNERS,
}: Readonly<PartnerBannersProps>) {
  return (
    <section className={styles.section} aria-label="Banners promocionais e parceiros">
      <div className={styles.container}>
        {banners.map((banner) => (
          <article
            key={banner.id}
            className={styles.bannerCard}
            style={{ backgroundImage: `url(${banner.bgImage ?? defaultBannerBg})` }}
          >
            <div className={styles.overlay} aria-hidden="true" />
            <div className={styles.content}>
              <h2 className={styles.title}>{banner.title}</h2>
              <p className={styles.description}>{banner.description}</p>
              <a
                href={banner.href}
                className={styles.ctaButton}
                aria-label={`${banner.buttonText} - ${banner.title}`}
              >
                {banner.buttonText}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}