const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  movie: { type: String, required: true },
  seats: { type: [String], required: true },
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", bookingSchema);