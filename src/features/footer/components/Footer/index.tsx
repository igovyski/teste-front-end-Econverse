import { Newsletter } from '../Newsletter';
import { FooterNav } from '../FooterNav';
import { Copyright } from '../Copyright';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <Newsletter />
      <FooterNav />
      <Copyright />
    </footer>
  );
}