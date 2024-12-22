import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './home.module.css';
import brake from "../assets/brake.png";
import battery from "../assets/battery.png";
import chem from "../assets/chem.png";
import lamp from "../assets/lamp.png";
import oil from "../assets/oil.png";
import wheels from "../assets/wheels.png";

const categories = [
  { id: 1, name: "Моторные масла", image: oil },
  { id: 2, name: "Тормозные жидкости", image: brake },
  { id: 3, name: "Аккумуляторы", image: battery },
  { id: 4, name: "Автохимия", image: chem },
  { id: 5, name: "Шины и диски", image: wheels },
  { id: 6, name: "Лампы", image: lamp },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/catalog?category=${category}`);
  };

  return (
    <div className={styles.home}>
      <div className={styles.categories}>
        {categories.map((category) => (
          <div
            key={category.id}
            className={styles.category}
            onClick={() => handleCategoryClick(category.name)}
          >
            <img
              src={category.image}
              alt={category.name}
              className={styles.category_image}
            />
            <div className={styles.category_name}>{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
