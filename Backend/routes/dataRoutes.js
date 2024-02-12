const express = require("express");
const router = express.Router();
const Data = require("../models/DataModel");

router.get("/", async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
