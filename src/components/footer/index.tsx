import styles from './footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__contract}>
          <h3>Контактная информация</h3>
          <ul>
            <li>Телефон: +1 234 567 890</li>
            <li>Email: info@autoshop.com</li>
            <li>Адрес: ул. Автозапчастей, 123</li>
          </ul>
        </div>

        <div className={styles.footer__info}>
          <h3>О нас</h3>
            <p>Мы — ваш надежный партнер в мире автозапчастей. Мы предлагаем только качественные товары от ведущих производителей.</p>
        </div>
        
        <div className={styles.footer__social}>
          <h3>Следите за нами</h3>
          <ul>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};