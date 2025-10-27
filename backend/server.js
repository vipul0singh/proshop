import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js'
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
app.use('/api/upload', uploadRoutes);
app.get('/api/config/paypal',(req,res) => res.send({clientId:
process.env.PAYPAL_CLIENT_ID
}));

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use('/uploads', express.static('/var/data/uploads'));
  app.use(express.static(path.join(__dirname, '/frontend/build')));

 app.all('(.*)', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});

} else {
  const __dirname = path.resolve();
  app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);