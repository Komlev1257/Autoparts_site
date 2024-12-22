import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5000;

// Настройка подключения к базе данных
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432', 10),
});
// Middleware
app.use(cors());
app.use(express.json());

// Маршрут для получения всех товаров
app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products.products');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Маршрут для добавления заказа
app.post('/api/orders', async (req, res) => {
  try {
    const { cart, deliveryMethod, paymentMethod, deliveryAddress } = req.body;

    const result = await pool.query(
      `INSERT INTO orders.orders (cart, delivery_method, payment_method, delivery_address) 
       VALUES ($1, $2, $3, $4) RETURNING id`,
      [JSON.stringify(cart), deliveryMethod, paymentMethod, deliveryAddress]
    );

    res.status(201).json({ orderId: result.rows[0].id });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  
});
