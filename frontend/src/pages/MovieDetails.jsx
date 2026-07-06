import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function MovieDetails() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/movies/${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [movieId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0a0a0f]">
        Loading...
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0a0a0f]">
        Movie not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >

          {/* Movie Title */}
          <h1 className="text-5xl font-black mb-4">
            {movie.title}
          </h1>

          <p className="text-gray-400 mb-6">
            {movie.genre} • {movie.duration} • ⭐ {movie.rating}
          </p>

          {/* Description */}
          <p className="text-gray-300 mb-10 leading-relaxed">
            {movie.description ||
              "No description available."}
          </p>

          {/* Price */}
          <div className="text-2xl font-bold mb-8">
            Ticket Price:{" "}
            <span className="text-yellow-400">
              Rs. {movie.price}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">

            <button
              onClick={() =>
                navigate(`/date/${movie.id}`)
              }
              className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-400 transition"
            >
              Book Tickets
            </button>

            <button
              onClick={() =>
                window.open(movie.trailer, "_blank")
              }
              className="px-8 py-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition"
            >
              Watch Trailer
            </button>

          </div>

        </motion.div>

      </div>
    </div>
  );
}

export default MovieDetails;