var express = require('express');
var router = express.Router();

router.get('/admin', async(req, res,) => {
  res.json({
      message: "Hello"
  })
});

module.exports = router;
