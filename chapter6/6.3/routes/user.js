const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("hello User");
})

router.get('/:id', (req, res) => {
  console.log(req.params.id)
  res.send(req.params.id)
})

module.exports = router;