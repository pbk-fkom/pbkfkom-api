const express = require("express");
const router = express.Router();
const periodeController = require("../controllers/periodeController");

router.get("/", periodeController.index);
router.get("/latest", periodeController.latest);

module.exports = router;
