const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  const currentTime = new Date().toString();
  console.log(`Time: ${currentTime} method: ${req.method} path: ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('illest mf');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/contact', (req, res) => {
  res.send({
    phone: '012345678',
    email: 'qwerty@email.com',
});
});

app.get('/error', (req, res) => {
  res.json({error: 'You are looking for water but this is a desert'});
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
