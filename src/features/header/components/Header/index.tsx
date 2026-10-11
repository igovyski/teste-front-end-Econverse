import { TopBar } from '../TopBar';
import { SearchBar } from '../SearchBar';
import { HeaderActions } from '../HeaderActions';
import { NavBar } from '../NavBar';
import { EconverseLogo } from '@/shared/components/EconverseLogo';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <TopBar />
      <div className={styles.mainBar}>
        <div className={styles.mainContainer}>
          <a href="/" className={styles.logoLink} aria-label="Econverse Home" title="Ir para a página inicial">
            <EconverseLogo aria-hidden="true" focusable="false" />
          </a>
          <SearchBar />
          <HeaderActions />
        </div>
      </div>
      <NavBar />
    </header>
  );
}