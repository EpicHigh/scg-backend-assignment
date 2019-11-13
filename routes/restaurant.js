const express = require("express");
const { findAllRestaurant } = require("../controller/restaurant");
const router = express.Router();

router.get("/", async function(req, res, next) {
  try {
    const data = await findAllRestaurant();
    await res.json(data);
  } catch (e) {
    await res.status(500).json({ type: "error", message: e.message });
  }
});

module.exports = router;
