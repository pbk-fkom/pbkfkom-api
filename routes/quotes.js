const express = require("express");
const router = express.Router();
const quotesController = require("../controllers/quotesController");

router.get("/", quotesController.index);
router.get("/chief", quotesController.chief);

module.exports = router;
