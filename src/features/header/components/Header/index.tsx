import React from 'react';
import { TopBar } from '../TopBar';
import { SearchBar } from '../SearchBar';
import { HeaderActions } from '../HeaderActions';
import { NavBar } from '../NavBar';
import { EconverseLogo } from '../EconverseLogo';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <TopBar />
      <div className={styles.mainBar}>
        <div className={styles.mainContainer}>
          <a href="/" className={styles.logoLink} aria-label="Econverse Home">
            <EconverseLogo />
          </a>
          <SearchBar />
          <HeaderActions />
        </div>
      </div>
      <NavBar />
    </header>
  );
};