import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./catalog.module.css";

import ProductCard from "../components/product_card/ProductCard";

type Product = {
    article: string;
    name: string;
    description: string;
    category: string;
    image_url: string;
    price: number;
};

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("search")?.toLowerCase() || "";
    const categoryQuery = searchParams.get("category");

    let filtered = products;

    if (categoryQuery) {
      filtered = filtered.filter(
        (product) => product.category === categoryQuery
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery) ||
          product.description.toLowerCase().includes(searchQuery)
      );
    }

    setFilteredProducts(filtered);
  }, [location.search, products]);

    return (
      <div className={styles.catalog}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.article}
            article={product.article}
            name={product.name}
            description={product.description}
            image={product.image_url}
            price={product.price}
          />
        ))}
      </div>
    );
};

export default Catalog;
