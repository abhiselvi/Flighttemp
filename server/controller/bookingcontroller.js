const bookingModel = require("../models/booking");
const flightModel = require("../models/flight");

exports.bookflight=async(req,res)=>{
    const flight= await flightModel.findById({flightId:req.body.flightId});
    
}