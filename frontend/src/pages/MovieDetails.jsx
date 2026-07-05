import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movies";
import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

function MovieDetails() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const { setBooking } = useContext(BookingContext);

  const movie = movies.find((m) => m.id === Number(movieId));

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] text-white">
        <h1 className="text-3xl font-bold">Movie Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Movie Poster */}
          <div>
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

          {/* Movie Details */}
          <div>
            <h1 className="text-5xl font-bold mb-4">
              {movie.title}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="bg-yellow-500 text-black px-4 py-1 rounded-full font-bold">
                ⭐ {movie.rating}
              </span>

              <span className="text-gray-300">
                {movie.genre}
              </span>
            </div>

            <p className="mb-3">
              <span className="font-bold">Duration:</span> {movie.duration}
            </p>

            <p className="mb-3">
              <span className="font-bold">Language:</span> {movie.language}
            </p>

            <p className="mb-3">
              <span className="font-bold">Director:</span> {movie.director}
            </p>

            <p className="mb-6">
              <span className="font-bold">Cast:</span> {movie.cast}
            </p>

            <h2 className="text-2xl font-bold mb-3">
              Story
            </h2>

            <p className="text-gray-400 leading-8 mb-8">
              {movie.description}
            </p>

            <div className="flex gap-4">

              <button
                onClick={() => window.open(movie.trailer, "_blank")}
                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold"
              >
                ▶ Watch Trailer
              </button>

              <button
                onClick={() => {
  setBooking((prev) => ({
    ...prev,
    movie,
  }));

  navigate(`/date/${movie.id}`);
}}
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold"
              >
                Continue Booking
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default MovieDetails;