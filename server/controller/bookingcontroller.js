const bookingModel = require("../models/booking");
const flightModel = require("../models/");

exports.book=async(req,res)=>{
    const flight= await flightModel.findById({flightId:req.body.flightId});
    // if(flight)
}