const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname + '/public');

// Setting EJS templating engine
app.set('view engine', 'ejs');


// Fichiers statiques
app.use(express.static(publicPath));

// Routing
app.get('/', (req, res) => {
  res.render('pages/index');
});
app.get('/landing', (req, res) => {
  res.render('pages/form');
});
app.get('/rayon-sans-allergene', (req, res) => {
  res.render('pages/rayon');
});



app.listen(port, () => {
  console.log(`Server is up on port ${port} !`);
});
