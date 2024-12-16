import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./catalog.module.css";

const Catalog: React.FC = () => {
  const location = useLocation();

  // Извлекаем параметры поиска
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search");

  return (
    <div className={styles.catalog}>
      <h1>Каталог товаров</h1>
      {searchQuery && (
        <p className={styles.search_result}>
          Результаты поиска для: <strong>{searchQuery}</strong>
        </p>
      )}
      {/* Логика для отображения фильтрованных товаров будет здесь */}
    </div>
  );
};

export default Catalog;
