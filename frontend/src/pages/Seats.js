import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const movies = [
  { id: 1, title: 'Inception', price: 350, color: '#6366f1' },
  { id: 2, title: 'The Dark Knight', price: 400, color: '#f59e0b' },
  { id: 3, title: 'Interstellar', price: 350, color: '#06b6d4' },
  { id: 4, title: 'Avengers: Endgame', price: 450, color: '#ef4444' },
  { id: 5, title: 'The Shawshank Redemption', price: 300, color: '#10b981' },
  { id: 6, title: 'Pulp Fiction', price: 300, color: '#ec4899' },
];

const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const seatsPerRow = 10;

function Seats() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(movieId));
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/bookings/booked-seats/${movie.title}`)
      .then((res) => res.json())
      .then((data) => {
        setBookedSeats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [movie.title]);

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

  const totalPrice = selectedSeats.length * movie.price;

  async function handleBooking() {
    if (selectedSeats.length === 0) return;
    try {
      await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          movie: movie.title,
          seats: selectedSeats,
          total: totalPrice,
        }),
      });
      navigate('/confirmation', {
        state: { movie: movie.title, seats: selectedSeats, total: totalPrice },
      });
    } catch (err) {
      console.error('Booking failed', err);
    }
  }

  if (!movie)
    return <div className="text-white pt-24 px-6">Movie not found</div>;
  if (loading)
    return (
      <div className="text-white pt-24 px-6 text-center">Loading seats...</div>
    );

  return (
    <div
      className="min-h-screen pt-24 px-6 pb-12"
      style={{ background: '#0a0a0f' }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-sm font-medium mb-2 tracking-widest uppercase"
            style={{ color: movie.color }}
          >
            Select Seats
          </p>
          <h1 className="text-4xl font-black text-white mb-2">{movie.title}</h1>
          <p className="text-gray-400 mb-10">Rs. {movie.price} per seat</p>
          <div
            className="mb-8 p-2 rounded-xl text-center text-gray-400 text-sm font-medium tracking-widest"
            style={{ background: '#1f2937' }}
          >
            SCREEN
          </div>
          <div className="space-y-3 mb-10">
            {rows.map((row) => (
              <div key={row} className="flex items-center gap-3">
                <span className="text-gray-400 text-sm w-4">{row}</span>
                <div className="flex gap-2 flex-wrap">
                  {Array.from({ length: seatsPerRow }, (_, i) => {
                    const seatId = `${row}${i + 1}`;
                    const status = getSeatStatus(seatId);
                    return (
                      <motion.button
                        key={seatId}
                        className="w-8 h-8 rounded-md text-xs font-bold text-white"
                        style={getSeatStyle(status)}
                        whileHover={status !== 'booked' ? { scale: 1.1 } : {}}
                        onClick={() => toggleSeat(seatId)}
                      >
                        {i + 1}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-6 mb-10">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-md"
                style={{ background: '#1f2937', border: '1px solid #374151' }}
              ></div>
              <span className="text-gray-400 text-sm">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-md"
                style={{ background: movie.color }}
              ></div>
              <span className="text-gray-400 text-sm">Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-md"
                style={{ background: '#374151' }}
              ></div>
              <span className="text-gray-400 text-sm">Booked</span>
            </div>
          </div>
          <div
            className="p-6 rounded-2xl border border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ background: '#0d0d14' }}
          >
            <div>
              <p className="text-gray-400 text-sm mb-1">Selected Seats</p>
              <p className="text-white font-bold">
                {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Price</p>
              <p className="text-2xl font-black" style={{ color: movie.color }}>
                Rs. {totalPrice}
              </p>
            </div>
            <button
              onClick={handleBooking}
              disabled={selectedSeats.length === 0}
              className="px-8 py-4 rounded-full font-semibold transition"
              style={{
                background: selectedSeats.length > 0 ? '#f59e0b' : '#374151',
                cursor: selectedSeats.length > 0 ? 'pointer' : 'not-allowed',
                color: selectedSeats.length > 0 ? 'black' : '#6b7280',
              }}
            >
              Confirm Booking
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Seats;
