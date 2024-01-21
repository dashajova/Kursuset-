const express = require('express');
const path = require('path');
const app = express();
const port = 5500;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/views/index.html/');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/views/about.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/views/contact.html');
});

app.get('/profile', (req, res) => {
  res.sendFile(__dirname + '/public/views/profile.html');
});
app.get('/profile', (req, res) => {
  res.sendFile(__dirname + '/public/views/home.html');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});