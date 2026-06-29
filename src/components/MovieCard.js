import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie, index }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition cursor-pointer"
      style={{ background: "#0d0d14" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => navigate(`/seats/${movie.id}`)}
    >
      <div className="w-full h-40 rounded-xl mb-4 flex items-center justify-center text-5xl font-black" style={{ background: `${movie.color}22`, border: `1px solid ${movie.color}44`, color: movie.color }}>
        🎬
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{movie.title}</h3>
      <p className="text-gray-400 text-sm mb-3">{movie.genre}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-400 text-sm">{movie.duration}</span>
        <span className="text-sm font-bold px-2 py-1 rounded-full" style={{ background: `${movie.color}22`, color: movie.color }}>
          {movie.rating}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-white font-bold">Rs. {movie.price}</span>
        <button className="px-4 py-2 rounded-full text-sm font-semibold text-black" style={{ background: "#f59e0b" }}>
          Book Now
        </button>
      </div>
    </motion.div>
  );
}

export default MovieCard;