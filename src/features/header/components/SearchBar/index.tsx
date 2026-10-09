import React, { useState } from 'react';
import styles from './SearchBar.module.scss';

export const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        placeholder="O que você está buscando?"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      <button type="button" className={styles.searchButton} aria-label="Buscar">
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.375 10.1875C19.375 15.2616 15.2616 19.375 10.1875 19.375C5.11338 19.375 1 15.2616 1 10.1875C1 5.11338 5.11338 1 10.1875 1C15.2616 1 19.375 5.11338 19.375 10.1875Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#9F9F9F"
          />
          <path
            d="M16.6836 16.6846L21.9993 22.0003"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#9F9F9F"
          />
        </svg>
      </button>
    </div>
  );
};