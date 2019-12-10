const express = require('express');
const router = express.Router();
const connection = require('../../helper/db');

connection.connect(function (err) {
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

router.post("/auth/signup", (req, res) => {
  connection.query('INSERT INTO users SET email=?, password=?, name=?, lastname=?', [req.body.email, req.body.password, req.body.name, req.body.lastname], (err, results) => {
    if (err)
      res.status(500).json({ flash: error.message });
    else
      res.status(200).json({ flash: "User has been signed up !" });
  })
})

router.use(function (req, res, next) {
  const err = new Error('Not found')
  err.status = 404
  next(err);
})

module.exports = router;