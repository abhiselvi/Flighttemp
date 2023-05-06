const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  register,
  login,
  protect,
} = require("../controller");

router.get("/",protect, getAllUsers);
router.post("/register", register);
router.post("/login", login);
module.exports = router;
