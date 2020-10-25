const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const PORT = 5000;

const app = express();
const productRoutes = require('./routes');
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

app.use('/api/products', productRoutes);

app.use(express.json()); // body parser

app.listen(PORT);
console.log(`Running on port ${PORT}`);
