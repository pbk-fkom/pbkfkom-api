const express = require("express");
const router = express.Router();
const structuralsController = require("../controllers/structuralsController");

router.get("/", structuralsController.index);

module.exports = router;
