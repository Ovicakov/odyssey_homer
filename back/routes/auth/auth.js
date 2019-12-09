const express = require('express');
const router = express.Router();

router.get("/auth", (req, res) => {
  res.send('Youhou')
})

router.post("/auth/signup", (req,res) => {
  res.send('I am in POST signup')
})

router.use(function(req, res, next) {
  const err = new Error ('Not found')
  err.status = 404
  next(err);
})

module.exports = router;