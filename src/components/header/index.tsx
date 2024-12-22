import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import React from "react";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <button
          className={styles.header_button}
          onClick={() => navigate("/payment")}
        >
          Оплата
        </button>
        <button
          className={styles.header_button}
          onClick={() => navigate("/delivery")}
        >
          Доставка
        </button>
        <button
          className={styles.header_button}
          onClick={() => navigate("/contacts")}
        >
          Контакты
        </button>
      </div>

      <div className={styles.header_right}>
        <span className={styles.header_contact}>📞 +7 (123) 456-78-90</span>
        <span className={styles.header_contact}>📧 info@example.com</span>
      </div>
    </div>
  );
};
