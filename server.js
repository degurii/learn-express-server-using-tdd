const express = require('express');

const PORT = 5000;

const app = express();
const productRoutes = require('./routes');

app.use('/api/products', productRoutes);

app.use(express.json()); // body parser

app.listen(PORT);
console.log(`Running on port ${PORT}`);
