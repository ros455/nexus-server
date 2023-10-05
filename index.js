import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import PortfolioRouter from './router/PortfolioRouter.js';
import SendMessageRouter from './router/SendMessageRouter.js';
import CalculatePageRouter from './router/CalculatePageRouter.js';
import OrderRouter from './router/OrderRouter.js';


dotenv.config();
const app = express();
const db = 'mongodb+srv://roskichuk:qwerty12345@cluster0.n27kvzd.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(db)
  .then(() => {
    console.log('DB Start');
  });

app.use(cors());
app.use(express.json());

app.use('/api',SendMessageRouter)
app.use('/api',PortfolioRouter)
app.use('/api',CalculatePageRouter)
app.use('/api',OrderRouter)

app.listen(process.env.PORT, () => {
    console.log('server start', process.env.PORT);
  });
  