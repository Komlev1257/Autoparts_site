import React, { useState } from "react";
import { useCart } from "../components/cart/CartContext";
import styles from "./cart.module.css";

const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState<"pickup" | "delivery">("pickup");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const storeAddress = "ул. Автозапчастей, 123";

  const handleOrderSubmit = async () => {
    if (deliveryMethod === "delivery" && !deliveryAddress) {
      alert("Пожалуйста, укажите адрес доставки.");
      return;
    }
    if (!paymentMethod) {
      alert("Пожалуйста, выберите способ оплаты.");
      return;
    }
  
    const orderData = {
      cart,
      deliveryMethod,
      paymentMethod,
      deliveryAddress: deliveryMethod === "pickup" ? storeAddress : deliveryAddress,
    };
  
    try {
      const response = await fetch("http://62.76.65.89:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
  
      if (response.ok) {
        const data = await response.json();
        alert(`Заказ успешно оформлен! Номер заказа: ${data.orderId}`);
        clearCart();
      } else {
        alert("Ошибка при оформлении заказа. Попробуйте снова.");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Ошибка при соединении с сервером.");
    }
  };
  
  return (
    <div className={styles.cart}>
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <>
          <ul className={styles.cart_list}>
            {cart.map((item) => (
              <li key={item.article} className={styles.cart_item}>
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    {item.price.toLocaleString()} ₽ x {item.quantity}
                  </p>
                </div>
                <button onClick={() => removeFromCart(item.article)}>Удалить</button>
              </li>
            ))}
          </ul>
          <div className={styles.cart_summary}>
            <p>Итоговая сумма: {totalPrice.toLocaleString()} ₽</p>
          </div>

          <form className={styles.cart_form}>
            <h3>Выберите способ доставки:</h3>
            <label>
              <input
                type="radio"
                value="pickup"
                checked={deliveryMethod === "pickup"}
                onChange={() => setDeliveryMethod("pickup")}
              />
              Самовывоз
            </label>
            <label>
              <input
                type="radio"
                value="delivery"
                checked={deliveryMethod === "delivery"}
                onChange={() => setDeliveryMethod("delivery")}
              />
              Доставка
            </label>

            {deliveryMethod === "pickup" && <p>Адрес магазина: {storeAddress}</p>}
            {deliveryMethod === "delivery" && (
              <div>
                <label>
                  Адрес доставки:
                  <input
                    type="text"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Введите адрес доставки"
                  />
                </label>
              </div>
            )}

            <h3>Выберите способ оплаты:</h3>
            <label>
              <input
                type="radio"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              Банковская карта
            </label>
            <label>
              <input
                type="radio"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
              />
              Наличные
            </label>

            <button type="button" onClick={handleOrderSubmit}>
              Оформить заказ
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Cart;
