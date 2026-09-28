import express from 'express';
import { config } from './config.js';
import menuRoutes from './routes/menu.js';
import orderRoutes from './routes/orders.js';
import webhookRoutes from './routes/webhooks.js';

const app = express();

app.use(express.json());

app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);
app.use('/webhooks', webhookRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(config.port, () => {
  console.log(`Mobile order API running on http://localhost:${config.port}`);
});
