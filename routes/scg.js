const express = require("express");
const router = express.Router();
const { scg: data } = require("../data");
const { sequenceEquation } = require("../controller");

router.get("/", function(req, res, next) {
  res.json(sequenceEquation(data));
});

module.exports = router;
