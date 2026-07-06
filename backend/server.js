const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
const movies = [
  {
    id: 1,
    title: 'Inception',
    genre: 'Sci-Fi / Thriller',
    duration: '2h 28min',
    rating: '8.8',
    price: 350,
    color: '#6366f1',
    poster: '/images/inception.jpg',
  },
  {
    id: 2,
    title: 'The Dark Knight',
    genre: 'Action / Crime',
    duration: '2h 32min',
    rating: '9.0',
    price: 400,
    color: '#f59e0b',
    poster: '/images/the dark knight.jpg',
  },
  {
    id: 3,
    title: 'Interstellar',
    genre: 'Sci-Fi / Drama',
    duration: '2h 49min',
    rating: '8.6',
    price: 350,
    color: '#06b6d4',
    poster: '/images/interstellar.jpg',
  },
  {
    id: 4,
    title: 'Avengers: Endgame',
    genre: 'Action / Adventure',
    duration: '3h 1min',
    rating: '8.4',
    price: 450,
    color: '#ef4444',
    poster: '/images/avenger endgame.jpg',
  },
  {
    id: 5,
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    duration: '2h 22min',
    rating: '9.3',
    price: 300,
    color: '#10b981',
    poster: '/images/the shawshank redemption.jpg',
  },
  {
    id: 6,
    title: 'Pulp Fiction',
    genre: 'Crime / Drama',
    duration: '2h 34min',
    rating: '8.9',
    price: 300,
    color: '#ec4899',
    poster: '/images/pulp fiction.jpg',
  },
];
app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.get('/api/movies/:id', (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));

  if (!movie) {
    return res.status(404).json({ message: 'Movie not found' });
  }

  res.json(movie);
});
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
