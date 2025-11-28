import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connect from './db/index.js';
import todoRoutes from './routes/todo-routes.js';

const app = express();

dotenv.config();
connect()

app.use(cors());
app.use(express.json());
app.use('/api', todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})