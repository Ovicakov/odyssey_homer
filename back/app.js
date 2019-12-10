const http  =  require('http');
const path  =  require('path');
const express  =  require('express');
const bodyParser  =  require('body-parser');
const morgan  =  require('morgan');
const app  =  express();
const port = 5000;
const auth = require('./routes/auth/auth');
const connection = require('./helper/db');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));
app.use('/', auth);

app.use('./routes/auth/auth', auth);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});