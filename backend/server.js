import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const task01 = express.Router();
const task01_data = [{ key1: 'text', key2: 'text2', key3: 123 }];

task01.get('/', (req, res) => {
  res.send('sci');
});

task01.get('/json', (req, res) => {
  res.json(task01_data);
});

app.use('/sci/4c/abc', task01);

const task02 = express.Router();
const task02_data = [];

task02.get('/data', (req, res) => {
  res.status(200).json(task02_data);
});

task02.post('/data', (req, res) => {
  task02_data.push(req.body);

  res.status(200).send('OK');
});

app.use('/task02', task02);

app.listen(port, '0.0.0.0', () => {
  console.log(`Running at http://localhost:${port}`);
});
