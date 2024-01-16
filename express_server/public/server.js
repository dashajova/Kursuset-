const express = require('express');
const app = express();
const port = 3000;

// Middleware for handling JSON requests
app.use(express.json());

// Your routes and logic will go here


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});