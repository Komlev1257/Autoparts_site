import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);}
    const goToHome = () => {
      navigate("/");
    };
  
    const goToCart = () => {
      navigate("/cart");
    };
    
    const handleSearchSubmit = () => {
      // Обработать поиск, например, перенаправить на страницу с результатами
      console.log("Поиск по запросу:", searchTerm);
    };

return (
  <header className={styles.header}>
  <div className={styles.header__left}>
    <button className={styles.header__button_main} onClick={goToHome}>
      <img src={logo} alt="Логотип" className={styles.header__logo} />
      <span className={styles.header__logo_text}>Автомобис Пик</span>
    </button>
  </div>

    <div className={styles.header__center}>
      <input
        type="text"
        placeholder="Поиск автозапчастей..."
        value={searchTerm}
        onChange={handleSearch}
        className={styles.header__search_input}
      />
      <button className={styles.header__search_button} onClick={handleSearchSubmit}>
            Найти
      </button>
    </div>

    <div className={styles.header__right}>
      <button className={styles.header__cart_button} onClick={goToCart}>
        <img src={cart} alt="Корзина" className={styles.header__cart_logo} />
      </button>
    </div>
  </header>
);
};
