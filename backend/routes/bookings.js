const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { movie, seats, total } = req.body;
    const booking = new Booking({ movie, seats, total });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/booked-seats/:movie", async (req, res) => {
  try {
    const bookings = await Booking.find({ movie: req.params.movie });
    const seats = bookings.flatMap((b) => b.seats);
    res.json(seats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;