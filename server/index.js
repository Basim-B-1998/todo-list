import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connect from './db/index.js';

const app = express();

dotenv.config();
connect()

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})