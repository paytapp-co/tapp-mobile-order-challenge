import { Router } from 'express';
import * as db from '../db.js';

const router = Router();

router.post('/', (req, res) => {
  const { items, total } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ error: 'Basket is empty' });
  }

  const order = db.createOrder({ items, total, status: 'pending' });

  // TODO: create a Tapp payment session and send the customer to the hosted checkout page

  res.status(201).json({ order });
});

router.get('/:id', (req, res) => {
  const order = db.getOrder(req.params.id);
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  res.json({ order });
});

export default router;
