import React from 'react';
import styles from './HeaderActions.module.scss';

export const HeaderActions: React.FC = () => {
  return (
    <div className={styles.actions}>
      {/* Meus Pedidos (Caixa) */}
      <button type="button" className={styles.actionBtn} aria-label="Meus Pedidos">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.0898 0.200202C21.3515 0.224131 21.5921 0.406846 21.6854 0.652407L24.156 7.3693C24.1848 7.44677 24.1998 7.52932 24.2001 7.61195V11.4943C24.2054 11.8672 23.8672 12.2102 23.4943 12.2102C23.1213 12.2102 22.7831 11.8672 22.7884 11.4943V8.31783H1.61196V22.7884H22.7884V15.7296H13.9649V17.4943C13.963 17.9948 13.3081 18.3557 12.884 18.0899L9.00164 15.6193C8.60297 15.3656 8.60297 14.6818 9.00164 14.4281L12.884 11.9575C13.0225 11.8666 13.1938 11.8268 13.3583 11.8472C13.6936 11.8949 13.9682 12.2144 13.9649 12.5531V14.3178H23.4943C23.8638 14.3179 24.2001 14.6541 24.2001 15.0237V23.4943C24.2001 23.8638 23.8638 24.2001 23.4943 24.2001H0.906075C0.536486 24.2001 0.200232 23.8638 0.200193 23.4943V7.61195C0.200079 7.55251 0.207512 7.49306 0.222254 7.43548L1.98696 0.718583C2.06864 0.422197 2.36335 0.19879 2.67078 0.200202C8.809 0.200202 14.9563 0.200202 21.0898 0.200202ZM20.5273 1.61196H13.259V6.90607H22.4796L20.5273 1.61196ZM11.8472 1.61196H3.21122L1.82151 6.90607H11.8472V1.61196ZM12.5531 13.8325L10.6891 15.0237L12.5531 16.2149V13.8325Z"
            fill="#9F9F9F"
          />
        </svg>
      </button>

      {/* Favoritos (Coração) */}
      <button type="button" className={styles.actionBtn} aria-label="Favoritos">
        <svg
          width="27"
          height="24"
          viewBox="0 0 27 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 23C13.5 23 1 16 1 7.50001C1.00025 5.99768 1.52082 4.5418 2.47318 3.37991C3.42555 2.21801 4.75093 1.42181 6.22399 1.12669C7.69704 0.831559 9.22685 1.05572 10.5533 1.76105C11.8798 2.46638 12.921 3.60935 13.5 4.99564L13.5 4.99565C14.079 3.60936 15.1202 2.46639 16.4467 1.76106C17.7731 1.05572 19.3029 0.83156 20.776 1.12669C22.2491 1.42181 23.5745 2.21801 24.5268 3.3799C25.4792 4.5418 25.9997 5.99768 26 7.50001C26 16 13.5 23 13.5 23Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#9F9F9F"
          />
        </svg>
      </button>

      {/* Minha Conta (Usuário) */}
      <button type="button" className={styles.actionBtn} aria-label="Minha Conta">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 13C25 19.6274 19.6274 25 13 25C6.37258 25 1 19.6274 1 13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13Z"
            strokeWidth="2"
            strokeMiterlimit="10"
            stroke="#9F9F9F"
          />
          <path
            d="M18 12C18 14.7614 15.7614 17 13 17C10.2386 17 8 14.7614 8 12C8 9.23858 10.2386 7 13 7C15.7614 7 18 9.23858 18 12Z"
            strokeWidth="2"
            strokeMiterlimit="10"
            stroke="#9F9F9F"
          />
          <path
            d="M4.97461 21.9218C5.72787 20.4408 6.87626 19.1971 8.29264 18.3284C9.70903 17.4598 11.3382 17 12.9997 17C14.6613 17 16.2904 17.4598 17.7068 18.3284C19.1232 19.1971 20.2716 20.4407 21.0248 21.9217"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#9F9F9F"
          />
        </svg>
      </button>

      {/* Carrinho de Compras */}
      <button type="button" className={styles.actionBtn} aria-label="Carrinho">
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 21H7.72727L4.2402 1.82112C4.19831 1.5907 4.07688 1.3823 3.89708 1.23225C3.71728 1.08219 3.49052 1 3.25633 1H1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#9F9F9F"
          />
          <path
            d="M11.5 23.5C11.5 24.8807 10.3807 26 9 26C7.61929 26 6.5 24.8807 6.5 23.5C6.5 22.1193 7.61929 21 9 21C10.3807 21 11.5 22.1193 11.5 23.5Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#9F9F9F"
          />
          <path
            d="M24.5 23.5C24.5 24.8807 23.3807 26 22 26C20.6193 26 19.5 24.8807 19.5 23.5C19.5 22.1193 20.6193 21 22 21C23.3807 21 24.5 22.1193 24.5 23.5Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#9F9F9F"
          />
          <path
            d="M6.81818 16H22.5127C22.981 16 23.4346 15.8356 23.7942 15.5355C24.1538 15.2354 24.3966 14.8186 24.4804 14.3578L26 6H5"
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