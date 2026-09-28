import { Router } from 'express';

const router = Router();

router.post('/tapp', (req, res) => {
  console.log('Tapp webhook received', req.body);

  // TODO: handle payment events

  res.sendStatus(200);
});

export default router;
