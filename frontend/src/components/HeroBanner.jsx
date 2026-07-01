import { useNavigate } from "react-router-dom";
import movies from "../data/movies";

function HeroBanner() {
  const navigate = useNavigate();

  const featuredMovie = movies[2]; // Interstellar

  return (
    <div
      className="relative h-[500px] rounded-3xl overflow-hidden mb-16"
      style={{
        backgroundImage: `url(${featuredMovie.poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 h-full flex items-center px-12">
        <div className="max-w-xl">

          <p className="text-yellow-400 font-bold mb-3">
            Featured Movie
          </p>

          <h1 className="text-6xl font-black text-white mb-4">
            {featuredMovie.title}
          </h1>

          <p className="text-xl text-gray-300 mb-4">
            ⭐ {featuredMovie.rating}
          </p>

          <p className="text-gray-300 leading-8 mb-8">
            {featuredMovie.description}
          </p>

          <div className="flex gap-4">

            <button
              onClick={() => window.open(featuredMovie.trailer)}
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl"
            >
              ▶ Watch Trailer
            </button>

            <button
              onClick={() => navigate(`/movie/${featuredMovie.id}`)}
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold"
            >
              Book Tickets
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroBanner;