import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errors.js';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import cartRoutes from './routes/cart.js';
import dsaRoutes from './routes/dsa.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

/* ✅ Health check */
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API is healthy ✅' });
});

app.get('/', (req, res) => {
  res.type('html').send(`
    <h1>ShoppyGlobe API + DSA</h1>
    <ul>
      <li><a href="/health">GET /health</a></li>        <!-- ✅ add link -->
      <li><a href="/products">GET /products</a></li>
      <li><a href="/products">GET /products/:id</a></li>
      <li><a href="/cart">GET /cart (JWT)</a></li>
      <li><a href="/docs">/docs</a></li>
    </ul>
  `);
});

app.get('/docs', (req, res) => {
  res.json({
    name: 'ShoppyGlobe API (Full Marks + DSA)',
    endpoints: [
      'GET  /health',                                  // ✅ add to docs
      'POST /register',
      'POST /login',
      'GET  /products',
      'GET  /products/:id',
      'GET  /cart (JWT)',
      'POST /cart (JWT)',
      'PUT  /cart/:itemId (JWT)',
      'DELETE /cart/:itemId (JWT)',
      'POST /dsa/linear-search',
      'POST /dsa/bubble-sort'
    ]
  });
});

app.use('/', authRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/dsa', dsaRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
