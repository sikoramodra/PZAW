import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());

import data from './sci_images/_data.json' with { type: 'json' } 

app.get('/data', (req, res) => {
    res.status(200).json(data);
});

app.listen(8000, () => {
    console.log('Server listening');
});
