const express = require('express');
const router = express.Router();
const connection = require('../../helper/db');

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});

router.get('/auth', (req, res) => {
  connection.query('SELECT * from users', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données');
    } else {
      res.json(results);
    }
  });
});

router.post("/auth/signup", (req,res) => {

  const email = req.body
  const name = req.body
  const passWord = req.body
  const lastName = req.body

  connection.query('INSERT INTO users SET ?', [email, name, passWord, lastName], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de l'écriture des données");
  } else {
      res.status(200)
    }
  })
})

router.use(function(req, res, next) {
  const err = new Error ('Not found')
  err.status = 404
  next(err);
})

module.exports = router;