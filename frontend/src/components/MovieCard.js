import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie, index }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-[#111827] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.03,
        y: -8,
      }}
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <div className="overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-96 object-cover transition duration-500 hover:scale-110"
        />
      </div>

      <div className="p-5">
        <h2 className="text-2xl font-bold text-white">
          {movie.title}
        </h2>

        <p className="text-gray-400 mt-2">
          {movie.genre}
        </p>

        <div className="flex justify-between mt-4">
          <span className="text-gray-300">
            {movie.duration}
          </span>

          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold">
            ⭐ {movie.rating}
          </span>
        </div>

        <div className="flex justify-between items-center mt-6">
          <h3 className="text-2xl font-bold text-white">
            Rs. {movie.price}
          </h3>

          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-5 py-2 rounded-full transition">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default MovieCard;