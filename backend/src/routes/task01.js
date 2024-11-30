import { Router } from 'express';

const router = Router();
const data = [{ key1: 'text', key2: 'text2', key3: 123 }];

router.get('/', (req, res) => {
  res.send('sci');
});

router.get('/json', (req, res) => {
  res.json(data);
});

export default router;
