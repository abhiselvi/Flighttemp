const express = require("express");
const router = express.Router();
const { bookFlight } = require("../controller/bookingcontroller");

router.post("/", bookFlight);

module.exports = router;
