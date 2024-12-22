import React from "react";
import { useCart } from "../../components/cart/CartContext";
import styles from "./productCard.module.css";

interface ProductCardProps {
    article: string;
    name: string;
    description: string;
    image: string;
    price: number;
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({ article, name, description, image, price }) => {
    const { addToCart } = useCart();
  
    const handleAddToCart = () => {
      addToCart({ article, name, price });
    };
  
    return (
      <div className={styles.card}>
        <div className={styles.card_inner}>
          <div className={styles.card_front}>
            <img src={image} alt={name} className={styles.card_image} />
            <h3 className={styles.card_title}>{name}</h3>
            <p className={styles.card_price}>{price.toLocaleString()} ₽</p>
          </div>
          <div className={styles.card_back}>
            <p className={styles.card_description}>{description}</p>
            <button className={styles.card_button} onClick={handleAddToCart}>
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  
