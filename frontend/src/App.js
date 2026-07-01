import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Seats from "./pages/Seats";
import Confirmation from "./pages/Confirmation";
import MovieDetails from "./pages/MovieDetails";
import SelectDate from "./pages/SelectDate";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seats/:movieId" element={<Seats />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path="/date/:movieId" element={<SelectDate/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;