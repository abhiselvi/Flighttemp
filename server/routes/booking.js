const express = require("express");
const router = express.Router();
const {
  booking
} = require("../controller/authenticationController");

router.get("/",protect, getAllUsers);
router.post("/register", register);
router.post("/login", login);
module.exports = router;