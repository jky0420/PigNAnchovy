import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './utils/connectDB';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

connectDB();

app.use('/', (req, res) => {
  res.send('Pig&Anchovy');
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

export default app;
