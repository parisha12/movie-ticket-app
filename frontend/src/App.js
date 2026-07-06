import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import SelectDate from './pages/SelectDate';
import TheatreSelection from './pages/TheatreSelection';
import ShowtimeSelection from './pages/ShowtimeSelection';
import Seats from './pages/Seats';
import Confirmation from './pages/Confirmation';
import BookingSummary from "./pages/BookingSummary";
import { BookingProvider } from './context/BookingContext';
import Payment from "./pages/Payment";

function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
          <Route path="/date/:movieId" element={<SelectDate />} />
          <Route path="/theatre/:movieId" element={<TheatreSelection />} />
          <Route path="/showtime/:movieId/:theatreId" element={<ShowtimeSelection />}/>
          <Route path="/seats/:movieId" element={<Seats />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/summary" element={<BookingSummary />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </BookingProvider>
  );
}

export default App;
