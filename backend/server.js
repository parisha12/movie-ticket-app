const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const DB_FILE = path.join(__dirname, 'bookings.json');

if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify([]));
}

function getBookings() {
  return JSON.parse(fs.readFileSync(DB_FILE));
}

function saveBookings(bookings) {
  fs.writeFileSync(DB_FILE, JSON.stringify(bookings, null, 2));
}

app.get('/api/bookings', (req, res) => {
  res.json(getBookings());
});

app.post('/api/bookings', (req, res) => {
  const { movie, seats, total } = req.body;
  const bookings = getBookings();
  const newBooking = {
    id: Date.now(),
    movie,
    seats,
    total,
    createdAt: new Date(),
  };
  bookings.push(newBooking);
  saveBookings(bookings);
  res.status(201).json(newBooking);
});

app.get('/api/bookings/booked-seats/:movie', (req, res) => {
  const bookings = getBookings();
  const seats = bookings
    .filter((b) => b.movie === req.params.movie)
    .flatMap((b) => b.seats);
  res.json(seats);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
