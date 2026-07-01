import { motion } from 'framer-motion';
import MovieCard from '../components/MovieCard';

const movies = [
  {
    id: 1,
    title: 'Inception',
    genre: 'Sci-Fi / Thriller',
    duration: '2h 28min',
    rating: '8.8',
    price: 350,
    color: '#6366f1',
  },
  {
    id: 2,
    title: 'The Dark Knight',
    genre: 'Action / Crime',
    duration: '2h 32min',
    rating: '9.0',
    price: 400,
    color: '#f59e0b',
  },
  {
    id: 3,
    title: 'Interstellar',
    genre: 'Sci-Fi / Drama',
    duration: '2h 49min',
    rating: '8.6',
    price: 350,
    color: '#06b6d4',
  },
  {
    id: 4,
    title: 'Avengers: Endgame',
    genre: 'Action / Adventure',
    duration: '3h 1min',
    rating: '8.4',
    price: 450,
    color: '#ef4444',
  },
  {
    id: 5,
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    duration: '2h 22min',
    rating: '9.3',
    price: 300,
    color: '#10b981',
  },
  {
    id: 6,
    title: 'Pulp Fiction',
    genre: 'Crime / Drama',
    duration: '2h 34min',
    rating: '8.9',
    price: 300,
    color: '#ec4899',
  },
];

function Home() {
  return (
    <div className="min-h-screen pt-24 px-6" style={{ background: '#0a0a0f' }}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-sm font-medium mb-2 tracking-widest uppercase"
          style={{ color: '#f59e0b' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Now Showing
        </motion.p>
        <motion.h1
          className="text-5xl font-black text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Choose a Movie
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {movies.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
