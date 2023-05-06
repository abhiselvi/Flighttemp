const express = require("express");
const router = express.Router();
const {
  booking
} = require("../controller/bookingcontroller");

router.post("/",protect, getAllUsers);

module.exports = router;