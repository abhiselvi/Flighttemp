const express = require("express");
const router = express.Router();
const { bookflight } = require("../controller/bookingcontroller");

router.post("/", bookflight);

module.exports = router;
