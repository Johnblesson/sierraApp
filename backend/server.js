const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
require('dotenv').config();

const templatePath = path.join(__dirname, './views');

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', templatePath);
app.use(express.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Login route
app.get('/', (req, res) => {
  res.render('index')
});

// Church Route
app.get('/churches', (req, res) => {
  res.render('churches');
});

// FAQ Route
app.get('/faq', (req, res) => {
  res.render('faq');
});

// About Route
app.get('/about', (req, res) => {
  res.render('about');
});

// Contact Route
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Map Route
app.get('/map', (req, res) => {
  res.render('map');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
