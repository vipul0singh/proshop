import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import orderRoutes from './routes/orderRoutes.js';
connectDB();


const app = express();
const PORT = process.env.PORT || 5000;

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cookie parser middleware
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send('API is running...');
});


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));