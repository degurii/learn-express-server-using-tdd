const express = require('express');

const PORT = 5000;

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Wolrd');
});

app.listen(PORT);
console.log(`Running on port ${PORT}`
