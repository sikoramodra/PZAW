import { Router } from 'express';

const router = Router();
const data = [];

router.get('/data', (req, res) => {
  res.status(200).json(data);
});

router.post('/data', (req, res) => {
  data.push(req.body);

  res.status(200).send('OK');
});

export default router;
