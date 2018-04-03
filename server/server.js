const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/../views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
  res.render('home.hbs');
});

app.get('/about', (req, res) => {
  res.render('about.hbs');
});

app.get('/faq', (req, res) => {
  res.render('faq.hbs');
});

app.get('/support', (req, res) => {
  res.render('support.hbs');
});

app.get('/subscribe', (req, res) => {
  res.render('subscribe.hbs');
});

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
