import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { motion } from "framer-motion";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen pt-24 px-6" style={{ background: "#0a0a0f" }}>
      <div className="max-w-6xl mx-auto">

        <motion.h1
          className="text-5xl font-black text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
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