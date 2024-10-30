import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('<div>asdasd</div>');
});

app.get('/abc', (req, res) => {
  res.status(500).send('<div>abc</div>');
});

app.post('/abc', (req, res) => {
  res.status(500).send('<div>post abc</div>');
});

app.delete('/abc', (req, res) => {
  res.status(500).send('<div>delete abc</div>');
});

const router = express.Router();
router.get('/', (req, res) => {
  res.send('sci');
});

const data = [{ key1: 'text', key2: 'text2', key3: 123 }];

router.get('/json', (req, res) => {
  res.json(data);
});

app.use('/sci/4c/abc', router);

app.listen(port, '0.0.0.0', () => {
  console.log(`Running at http://localhost:${port}`);
});
