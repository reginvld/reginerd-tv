const express = require('express');
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

const port = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'balls'
  });
});

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
