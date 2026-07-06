import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function BookingSummary() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center text-white">
        <h1 className="text-3xl font-bold">No Booking Found</h1>
      </div>
    );
  }

  const {
    movie,
    date,
    theatre,
    showtime,
    seats,
    total,
  } = state;

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 px-6 pb-10 text-white">
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          <h1 className="text-5xl font-black mb-2">
            Booking Summary
          </h1>

          <p className="text-gray-400 mb-10">
            Please review your booking before proceeding.
          </p>

          <div className="bg-[#18181f] border border-gray-700 rounded-2xl p-8 space-y-6">

            <div className="flex justify-between">
              <span className="text-gray-400">🎬 Movie</span>
              <span className="font-semibold">{movie}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">📅 Date</span>
              <span className="font-semibold">
                {date.day} ({date.date})
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">🏢 Theatre</span>
              <span className="font-semibold">
                {theatre.name}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">🕒 Showtime</span>
              <span className="font-semibold">
                {showtime}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">💺 Seats</span>
              <span className="font-semibold">
                {seats.join(", ")}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">🎟 Tickets</span>
              <span className="font-semibold">
                {seats.length}
              </span>
            </div>

            <hr className="border-gray-700" />

            <div className="flex justify-between text-2xl font-bold">
              <span>Total</span>
              <span className="text-yellow-400">
                Rs. {total}
              </span>
            </div>

          </div>

          <div className="flex gap-4 mt-8">

            <button
              onClick={() => navigate(-1)}
              className="flex-1 py-4 rounded-xl bg-gray-700 hover:bg-gray-600 transition"
            >
              Back
            </button>

            <button
              onClick={() =>
                navigate("/payment", {
                  state,
                })
              }
              className="flex-1 py-4 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition"
            >
              Proceed to Payment
            </button>

          </div>

        </motion.div>
      </div>
    </div>
  );
}

export default BookingSummary;