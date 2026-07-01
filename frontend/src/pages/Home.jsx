import { motion } from "framer-motion";
import { useState } from "react";
import MovieCard from "../components/MovieCard";
import HeroBanner from "../components/HeroBanner";
import movies from "../data/movies";

function Home() {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">

        <HeroBanner />

        <motion.p
          className="text-sm font-medium mb-2 tracking-widest uppercase text-yellow-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Now Showing
        </motion.p>

        <motion.h1
          className="text-5xl font-black text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Choose a Movie
        </motion.h1>

        {/* Search Box */}
        <input
          type="text"
          placeholder="🔍 Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-10 px-5 py-4 rounded-xl bg-[#1b1b28] text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                index={index}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 text-xl">
              No movies found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;