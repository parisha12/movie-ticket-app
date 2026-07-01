import inception from "../assets/images/inception.jpg";
import darkKnight from "../assets/images/the dark knight.jpg";
import interstellar from "../assets/images/interstellar.jpg";
import endgame from "../assets/images/avenger endgame.jpg";
import shawshank from "../assets/images/the shawshank redemption.jpg";
import pulpFiction from "../assets/images/pulp fiction.jpg";

const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi / Thriller",
    duration: "2h 28min",
    rating: "8.8",
    language: "English",
    director: "Christopher Nolan",
    cast: "Leonardo DiCaprio, Joseph Gordon-Levitt",
    description:
      "A skilled thief enters people's dreams to steal secrets but is offered a chance to erase his criminal history by planting an idea into someone's mind.",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    price: 350,
    color: "#6366f1",
    poster: inception,
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action / Crime",
    duration: "2h 32min",
    rating: "9.0",
    language: "English",
    director: "Christopher Nolan",
    cast: "Christian Bale, Heath Ledger",
    description:
      "Batman faces his greatest enemy, the Joker, who seeks to create chaos in Gotham City.",
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    price: 400,
    color: "#f59e0b",
    poster: darkKnight,
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi / Drama",
    duration: "2h 49min",
    rating: "8.6",
    language: "English",
    director: "Christopher Nolan",
    cast: "Matthew McConaughey, Anne Hathaway",
    description:
      "A team of astronauts travels through a wormhole searching for a new home for humanity.",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    price: 350,
    color: "#06b6d4",
    poster: interstellar,
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    genre: "Action / Adventure",
    duration: "3h 1min",
    rating: "8.4",
    language: "English",
    director: "Anthony & Joe Russo",
    cast: "Robert Downey Jr., Chris Evans",
    description:
      "The Avengers assemble one final time to undo the destruction caused by Thanos.",
    trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    price: 450,
    color: "#ef4444",
    poster: endgame,
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    genre: "Drama",
    duration: "2h 22min",
    rating: "9.3",
    language: "English",
    director: "Frank Darabont",
    cast: "Tim Robbins, Morgan Freeman",
    description:
      "Two imprisoned men form a lifelong friendship while hoping for freedom.",
    trailer: "https://www.youtube.com/watch?v=NmzuHjWmXOc",
    price: 300,
    color: "#10b981",
    poster: shawshank,
  },
  {
    id: 6,
    title: "Pulp Fiction",
    genre: "Crime / Drama",
    duration: "2h 34min",
    rating: "8.9",
    language: "English",
    director: "Quentin Tarantino",
    cast: "John Travolta, Samuel L. Jackson",
    description:
      "The lives of two hitmen, a boxer, and others intertwine in a series of unforgettable stories.",
    trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
    price: 300,
    color: "#ec4899",
    poster: pulpFiction,
  },
];

export default movies;