import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import styles from "./stickyBar.module.css";
import logo from "../../assets/logo.png";
import cart_logo from "../../assets/cart.png";

const StickyBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.sticky_bar}>
      <button
        className={styles.sticky_logo_button}
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="Логотип" className={styles.sticky_logo_image} />
        <span className={styles.sticky_logo_text}>Автомобис Пик</span>
      </button>

      <div className={styles.sticky_search}>
        <input
          type="text"
          placeholder="Поиск..."
          className={styles.sticky_search_input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className={styles.sticky_search_button} onClick={handleSearch}>
          Найти
        </button>
      </div>

      <button
        className={styles.sticky_cart_button}
        onClick={() => navigate("/cart")}
      >
        <img
          src={cart_logo}
          alt="Корзина"
          className={styles.sticky_cart_image}
        />
        {totalItems > 0 && (
          <span className={styles.sticky_cart_badge}>{totalItems}</span>
        )}
      </button>
    </div>
  );
};

export default StickyBar;
