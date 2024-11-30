import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import routes from './src/routes/index.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', routes);

app.listen(port, '0.0.0.0', () => {
  console.log(`Running at http://localhost:${port}`);
});
