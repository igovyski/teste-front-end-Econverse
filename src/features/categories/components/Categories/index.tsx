import { useState } from 'react';
import technologyIcon from '@/assets/icons/monitor-tablet-smartphones.svg';
import supermarketIcon from '@/assets/icons/supermercados.svg';
import drinksIcon from '@/assets/icons/whiskey.svg';
import toolsIcon from '@/assets/icons/ferramentas.svg';
import healthIcon from '@/assets/icons/cuidados-de-saude.svg';
import sportsIcon from '@/assets/icons/esportes.svg';
import fashionIcon from '@/assets/icons/moda.svg';
import styles from './Categories.module.scss';

interface CategoryItem {
  readonly id: string;
  readonly label: string;
  readonly iconSrc: string;
}

const CATEGORIES = [
  { id: 'tecnologia', label: 'Tecnologia', iconSrc: technologyIcon },
  { id: 'supermercado', label: 'Supermercado', iconSrc: supermarketIcon },
  { id: 'bebidas', label: 'Bebidas', iconSrc: drinksIcon },
  { id: 'ferramentas', label: 'Ferramentas', iconSrc: toolsIcon },
  { id: 'saude', label: 'Saúde', iconSrc: healthIcon },
  { id: 'esportes', label: 'Esportes e Fitness', iconSrc: sportsIcon },
  { id: 'moda', label: 'Moda', iconSrc: fashionIcon },
] as const satisfies readonly CategoryItem[];

type CategoryId = (typeof CATEGORIES)[number]['id'];

export function Categories() {
  const [selectedId, setSelectedId] = useState<CategoryId>('tecnologia');

  return (
    <nav className={styles.categoriesSection} aria-label="Categorias de produtos">
      <ul className={styles.categoriesList}>
        {CATEGORIES.map((cat) => {
          const isActive = cat.id === selectedId;

          return (
            <li key={cat.id} className={styles.categoryItem}>
              <button
                type="button"
                className={`${styles.categoryCard} ${isActive ? styles.activeCard : ''}`}
                onClick={() => setSelectedId(cat.id)}
                aria-label={cat.label}
                aria-pressed={isActive}
              >
                <img
                  src={cat.iconSrc}
                  alt=""
                  aria-hidden="true"
                  className={styles.icon}
                  loading="lazy"
                />
              </button>
              <span className={`${styles.categoryLabel} ${isActive ? styles.activeLabel : ''}`}>
                {cat.label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}