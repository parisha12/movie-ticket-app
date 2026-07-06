import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const seatsPerRow = 10;

function Seats() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  // 🎬 FETCH MOVIE FROM BACKEND
  useEffect(() => {
    fetch(`http://localhost:5000/api/movies/${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [movieId]);

  // 🎟 FETCH BOOKED SEATS
  useEffect(() => {
    if (!movie) return;

    fetch(
      `http://localhost:5000/api/bookings/booked-seats?movie=${movie.title}`
    )
      .then((res) => res.json())
      .then((data) => setBookedSeats(data))
      .catch(() => setBookedSeats([]));
  }, [movie]);

  function toggleSeat(seatId) {
    if (bookedSeats.includes(seatId)) return;

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  }

  function getSeatStatus(seatId) {
    if (bookedSeats.includes(seatId)) return 'booked';
    if (selectedSeats.includes(seatId)) return 'selected';
    return 'available';
  }

  function getSeatStyle(status) {
    if (!movie) return {};

    if (status === 'booked')
      return { background: '#374151', cursor: 'not-allowed' };

    if (status === 'selected')
      return { background: movie.color, cursor: 'pointer' };

    return {
      background: '#1f2937',
      cursor: 'pointer',
      border: '1px solid #374151',
    };
  }

  function handleBooking() {
    if (!movie || selectedSeats.length === 0) return;

    const totalPrice = selectedSeats.length * movie.price;

    fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        movie: movie.title,
        seats: selectedSeats,
        total: totalPrice,
      }),
    })
      .then(() => {
        navigate('/confirmation', {
          state: {
            movie: movie.title,
            seats: selectedSeats,
            total: totalPrice,
          },
        });
      })
      .catch((err) => console.log(err));
  }

  // ⏳ LOADING STATE
  if (loading) {
    return (
      <div className="text-white pt-24 px-6 text-center">Loading movie...</div>
    );
  }

  // ❌ MOVIE NOT FOUND SAFETY
  if (!movie) {
    return (
      <div className="text-white pt-24 px-6 text-center">Movie not found</div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-6 pb-12 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-black text-white mb-2">{movie.title}</h1>

          <p className="text-gray-400 mb-10">Rs. {movie.price} per seat</p>

          {/* SCREEN */}
          <div className="mb-8 p-2 text-center text-gray-400 bg-[#1f2937] rounded-xl">
            SCREEN
          </div>

          {/* SEATS */}
          <div className="space-y-3 mb-10">
            {rows.map((row) => (
              <div key={row} className="flex items-center gap-3">
                <span className="text-gray-400 w-4">{row}</span>

                <div className="flex gap-2 flex-wrap">
                  {Array.from({ length: seatsPerRow }, (_, i) => {
                    const seatId = `${row}${i + 1}`;
                    const status = getSeatStatus(seatId);

                    return (
                      <motion.button
                        key={seatId}
                        className="w-8 h-8 rounded-md text-xs font-bold text-white"
                        style={getSeatStyle(status)}
                        onClick={() => toggleSeat(seatId)}
                        whileHover={status !== 'booked' ? { scale: 1.1 } : {}}
                      >
                        {i + 1}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="flex justify-between items-center p-6 bg-[#111827] rounded-2xl">
            <div>
              <p className="text-gray-400">Selected Seats</p>
              <p className="text-white font-bold">
                {selectedSeats.join(', ') || 'None'}
              </p>
            </div>

            <div>
              <p className="text-gray-400">Total</p>
              <p className="text-yellow-400 font-bold text-xl">
                Rs. {selectedSeats.length * movie.price}
              </p>
            </div>

            <button
              onClick={handleBooking}
              disabled={selectedSeats.length === 0}
              className="bg-yellow-500 px-6 py-3 rounded-full font-bold disabled:bg-gray-600"
            >
              Confirm
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Seats;
