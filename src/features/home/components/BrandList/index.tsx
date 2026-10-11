import { EconverseLogo } from '@/shared/components/EconverseLogo';
import styles from './BrandList.module.scss';

interface BrandItem {
  readonly id: string;
  readonly name: string;
}

const BRANDS: readonly BrandItem[] = [
  { id: 'brand-1', name: 'Econverse' },
  { id: 'brand-2', name: 'Econverse' },
  { id: 'brand-3', name: 'Econverse' },
  { id: 'brand-4', name: 'Econverse' },
  { id: 'brand-5', name: 'Econverse' },
];

export function BrandList() {
  return (
    <section className={styles.section} aria-labelledby="brand-list-title">
      <div className={styles.container}>
        <h2 id="brand-list-title" className={styles.title}>
          Navegue por marcas
        </h2>

        <ul className={styles.list}>
          {BRANDS.map((brand) => (
            <li key={brand.id} className={styles.item}>
              <button
                type="button"
                className={styles.circle}
                aria-label={`Filtrar por marca ${brand.name}`}
              >
                <EconverseLogo width={117} height={37} aria-hidden="true" focusable="false" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}