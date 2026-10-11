import { useState, type SyntheticEvent } from 'react';
import styles from './Newsletter.module.scss';

export function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className={styles.newsletter} aria-labelledby="newsletter-heading">
      <div className={styles.container}>
        <div className={styles.titleArea}>
          <h2 id="newsletter-heading" className={styles.title}>
            Inscreva-se na nossa newsletter
          </h2>
          <p className={styles.subtitle}>
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className={styles.formArea} onSubmit={handleSubmit}>
          <div className={styles.inputsRow}>
            <input
              type="text"
              name="name"
              autoComplete="name"
              aria-label="Nome"
              placeholder="Digite seu nome"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              autoComplete="email"
              aria-label="E-mail"
              placeholder="Digite seu e-mail"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.submitButton}>
              INSCREVER
            </button>
          </div>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              required
            />
            <span className={styles.checkboxText}>Aceito os termos e condições</span>
          </label>
        </form>
      </div>
    </section>
  );
}