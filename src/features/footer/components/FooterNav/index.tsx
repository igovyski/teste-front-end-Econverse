import { EconverseLogo } from '@/shared/components/EconverseLogo';
import styles from './FooterNav.module.scss';

interface FooterLink {
  readonly label: string;
  readonly href: string;
}

const INSTITUTIONAL: readonly FooterLink[] = [
  { label: 'Sobre Nós', href: '#sobre-nos' },
  { label: 'Movimento', href: '#movimento' },
  { label: 'Trabalhe conosco', href: '#trabalhe-conosco' },
];

const HELP: readonly FooterLink[] = [
  { label: 'Suporte', href: '#suporte' },
  { label: 'Fale Conosco', href: '#fale-conosco' },
  { label: 'Perguntas Frequentes', href: '#perguntas-frequentes' },
];

const TERMS: readonly FooterLink[] = [
  { label: 'Termos e Condições', href: '#termos-e-condicoes' },
  { label: 'Política de Privacidade', href: '#politica-de-privacidade' },
  { label: 'Troca e Devolução', href: '#troca-e-devolucao' },
];

export function FooterNav() {
  return (
    <section className={styles.footerNav} aria-label="Informações da empresa">
      <div className={styles.container}>
        <div className={styles.brandArea}>
          <EconverseLogo width={139} height={42} />
          <p className={styles.brandDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className={styles.socialIcons} role="group" aria-label="Redes sociais">
            <a href="#instagram" aria-label="Instagram" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                  stroke="#4A4A4A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 11.3698C16.1234 12.2021 15.9813 13.052 15.5938 13.7988C15.2063 14.5456 14.5931 15.1512 13.8416 15.5295C13.0901 15.9077 12.2384 16.0394 11.4078 15.9057C10.5771 15.7721 9.80976 15.3799 9.21484 14.785C8.61991 14.1901 8.22773 13.4227 8.09406 12.592C7.9604 11.7614 8.09206 10.9097 8.47032 10.1582C8.84858 9.40667 9.45418 8.79355 10.201 8.40605C10.9478 8.01856 11.7978 7.8764 12.63 7.99981C13.4789 8.1257 14.2648 8.52128 14.8717 9.12812C15.4785 9.73496 15.8741 10.5209 16 11.3698Z"
                  stroke="#4A4A4A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 6.5H17.51"
                  stroke="#4A4A4A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a href="#facebook" aria-label="Facebook" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                  stroke="#4A4A4A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a href="#linkedin" aria-label="LinkedIn" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                  stroke="#4A4A4A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 9H2V21H6V9Z"
                  stroke="#4A4A4A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  stroke="#4A4A4A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <span className={styles.divider} aria-hidden="true" />

        <nav className={styles.columnsWrapper} aria-label="Links rápidos">
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Institucional</h3>
            <ul className={styles.linkList}>
              {INSTITUTIONAL.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Ajuda</h3>
            <ul className={styles.linkList}>
              {HELP.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Termos</h3>
            <ul className={styles.linkList}>
              {TERMS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
}