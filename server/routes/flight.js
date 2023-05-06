const express = require("express");
const router = express.Router();
const {
    addflightdetails ,
} = require("../controller/flightController");

router.post("/",addflightdetails );
module.exports = router;
