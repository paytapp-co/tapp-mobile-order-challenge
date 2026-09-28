import { Router } from 'express';
import { menu, venue } from '../menu.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({ venue, items: menu });
});

export default router;
