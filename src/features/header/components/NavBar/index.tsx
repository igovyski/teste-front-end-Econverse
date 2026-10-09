import React from 'react';
import styles from './NavBar.module.scss';

const NAV_LINKS = [
  { label: 'Todas Categorias', href: '#todas-categorias' },
  { label: 'Supermercado', href: '#supermercado' },
  { label: 'Livros', href: '#livros' },
  { label: 'Moda', href: '#moda' },
  { label: 'Lançamentos', href: '#lancamentos' },
  { label: 'Ofertas do Dia', href: '#ofertas', isActive: true },
];

export const NavBar: React.FC = () => {
  return (
    <nav className={styles.navBar} aria-label="Menu principal">
      <ul className={styles.navList}>
        {NAV_LINKS.map((link) => (
          <li key={link.label} className={styles.navItem}>
            <a
              href={link.href}
              className={`${styles.navLink} ${link.isActive ? styles.activeLink : ''}`}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li className={styles.navItem}>
          <a href="#assinatura" className={`${styles.navLink} ${styles.signatureLink}`}>
            <svg
              width="19"
              height="15"
              viewBox="0 0 19 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.00447 13.1519C3.02395 13.234 3.05985 13.3114 3.11002 13.3793C3.16018 13.4472 3.22356 13.5043 3.29636 13.5471C3.36915 13.5899 3.44984 13.6175 3.53359 13.6283C3.61733 13.6391 3.70239 13.6328 3.78365 13.6098C7.50937 12.5811 11.4441 12.5808 15.1701 13.6088C15.2513 13.6317 15.3363 13.6379 15.42 13.6271C15.5037 13.6164 15.5844 13.5888 15.6572 13.546C15.7299 13.5032 15.7933 13.4462 15.8435 13.3783C15.8936 13.3104 15.9296 13.2331 15.9491 13.151L17.9404 4.68874C17.967 4.57545 17.9615 4.45698 17.9245 4.34665C17.8874 4.23632 17.8203 4.13853 17.7307 4.06428C17.6411 3.99003 17.5325 3.94229 17.4172 3.92641C17.3019 3.91054 17.1845 3.92718 17.0782 3.97444L13.1263 5.73082C12.9836 5.79425 12.8223 5.80195 12.6742 5.75242C12.5261 5.7029 12.4019 5.59972 12.3261 5.46322L10.0251 1.32147C9.97101 1.22404 9.89181 1.14286 9.79575 1.08633C9.69968 1.02981 9.59025 1 9.47879 1C9.36733 1 9.2579 1.02981 9.16184 1.08633C9.06577 1.22404 8.98657 1.22404 8.93244 1.32147L6.63148 5.46322C6.55564 5.59972 6.43145 5.7029 6.28336 5.75242C6.13526 5.80195 5.97399 5.79424 5.83129 5.73082L1.87884 3.97418C1.77251 3.92692 1.6551 3.91028 1.53983 3.92614C1.42455 3.942 1.316 3.98972 1.22638 4.06393C1.13676 4.13814 1.06964 4.2359 1.03257 4.34619C0.995496 4.45649 0.989952 4.57494 1.01656 4.68822L3.00447 13.1519Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#9F9F9F"
              />
            </svg>
            <span>Assinatura</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};