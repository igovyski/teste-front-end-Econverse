import React from 'react';
import styles from './TopBar.module.scss';

export const TopBar: React.FC = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        {/* Compra 100% segura */}
        <div className={styles.item}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
          >
            <path
              d="M3.125 8.95833V4.375C3.125 4.20924 3.19085 4.05027 3.30806 3.93306C3.42527 3.81585 3.58424 3.75 3.75 3.75H16.25C16.4158 3.75 16.5747 3.81585 16.6919 3.93306C16.8092 4.05027 16.875 4.20924 16.875 4.375V8.95833C16.875 15.522 11.3042 17.6966 10.1919 18.0654C10.0675 18.1082 9.93246 18.1082 9.80811 18.0654C8.69578 17.6966 3.125 15.522 3.125 8.95833Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#9F9F9F"
            />
            <path
              d="M13.4375 8.125L8.85414 12.5L6.5625 10.3125"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#9F9F9F"
            />
          </svg>
          <span className={styles.neutralText}>
            Compra <strong className={styles.neutralHighlight}>100% segura</strong>
          </span>
        </div>

        {/* Frete grátis acima de R$ 200 */}
        <div className={styles.item}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
          >
            <path
              d="M18.75 9.375H13.75V6.25H17.0769C17.2018 6.25 17.3238 6.28743 17.4272 6.35746C17.5307 6.42749 17.6108 6.5269 17.6572 6.64288L18.75 9.375Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#9F9F9F"
            />
            <path
              d="M1.25 11.25H13.75"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#9F9F9F"
            />
            <path
              d="M16.5625 15C16.5625 16.0355 15.723 16.875 14.6875 16.875C13.652 16.875 12.8125 16.0355 12.8125 15C12.8125 13.9645 13.652 13.125 14.6875 13.125C15.723 13.125 16.5625 13.9645 16.5625 15Z"
              strokeWidth="2"
              strokeMiterlimit="10"
              stroke="#9F9F9F"
            />
            <path
              d="M7.1875 15C7.1875 16.0355 6.34803 16.875 5.3125 16.875C4.27697 16.875 3.4375 16.0355 3.4375 15C3.4375 13.9645 4.27697 13.125 5.3125 13.125C6.34803 13.125 7.1875 13.9645 7.1875 15Z"
              strokeWidth="2"
              strokeMiterlimit="10"
              stroke="#9F9F9F"
            />
            <path
              d="M12.8125 15H7.1875"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#9F9F9F"
            />
            <path
              d="M3.4375 15H1.875C1.70924 15 1.55027 14.9342 1.43306 14.8169C1.31585 14.6997 1.25 14.5408 1.25 14.375V5.625C1.25 5.45924 1.31585 5.30027 1.43306 5.18306C1.55027 5.06585 1.70924 5 1.875 5H13.75V13.3762"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#9F9F9F"
            />
            <path
              d="M13.75 13.3762V9.375H18.75V14.375C18.75 14.5408 18.6842 14.6997 18.5669 14.8169C18.4497 14.9342 18.2908 15 18.125 15H16.5625"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#9F9F9F"
            />
          </svg>
          <span className={styles.primaryText}>
            Frete grátis <span className={styles.neutralSpan}>acima de R$ 200</span>
          </span>
        </div>

        {/* Parcele suas compras */}
        <div className={styles.item}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
          >
            <path
              d="M2.5 4.375H17.5C17.8452 4.375 18.125 4.65482 18.125 5V15C18.125 15.3452 17.8452 15.625 17.5 15.625H2.5C2.15482 15.625 1.875 15.3452 1.875 15V5C1.875 4.65482 2.15482 4.375 2.5 4.375Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#9F9F9F"
            />
            <path
              d="M13.124 13.125H15.624"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#9F9F9F"
            />
            <path
              d="M9.37402 13.125H10.624"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#9F9F9F"
            />
            <path
              d="M1.87402 7.56641H18.124"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#9F9F9F"
            />
          </svg>
          <span className={styles.primaryText}>
            Parcele <span className={styles.neutralSpan}>suas compras</span>
          </span>
        </div>
      </div>
    </div>
  );
};