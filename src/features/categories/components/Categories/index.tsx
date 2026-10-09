import React, { useState } from 'react';
import styles from './Categories.module.scss';

// Importe ou use os SVGs locais para cada categoria
interface CategoryItem {
  id: string;
  label: string;
  iconPath: string; // ou ReactNode se estiver importando como componente
}

const CATEGORIES: CategoryItem[] = [
  { id: 'tecnologia', label: 'Tecnologia', iconPath: '/assets/icons/monitor-tablet-smartphones.svg' },
  { id: 'supermercado', label: 'Supermercado', iconPath: '/assets/icons/supermercados.svg' },
  { id: 'bebidas', label: 'Bebidas', iconPath: '/assets/icons/whiskey.svg' },
  { id: 'ferramentas', label: 'Ferramentas', iconPath: '/assets/icons/ferramentas.svg' },
  { id: 'saude', label: 'Saúde', iconPath: '/assets/icons/cuidados-de-saude.svg' },
  { id: 'esportes', label: 'Esportes e Fitness', iconPath: '/assets/icons/esportes.svg' },
  { id: 'moda', label: 'Moda', iconPath: '/assets/icons/moda.svg' },
];

export const Categories: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('tecnologia');

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
                aria-pressed={isActive}
              >
                <img
                  src={cat.iconPath}
                  alt=""
                  aria-hidden="true"
                  className={`${styles.icon} ${isActive ? styles.activeIcon : ''}`}
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
};