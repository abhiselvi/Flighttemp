const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passengerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  passportId: {
    type: String,
  },
});

const flightSchema = new Schema({
  flightId: {
    type: String,
    required: true,
  },
  passengers: [passengerSchema],
});

const Flight = mongoose.model("Flight", flightSchema);
