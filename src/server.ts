import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import 'dotenv/config';
import { dbConnect } from './config/mongodb';
import taskRoutes from './routes/task.routes.ts'

const app = express();

/* Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors())

/* Routes */

app.use('/api/tasks', taskRoutes);

/* Database */

dbConnect();

/* Server */

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})