import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Confirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "#0a0a0f" }}>
      <motion.div
        className="max-w-md w-full p-8 rounded-2xl border border-gray-800 text-center"
        style={{ background: "#0d0d14" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-6xl mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          🎉
        </motion.div>
        <h1 className="text-3xl font-black text-white mb-2">Booking Confirmed!</h1>
        <p className="text-gray-400 mb-8">Your tickets have been booked successfully.</p>
        <div className="p-4 rounded-xl mb-6 text-left space-y-3" style={{ background: "#1f2937" }}>
          <div className="flex justify-between">
            <span className="text-gray-400">Movie</span>
            <span className="text-white font-bold">{state.movie}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Seats</span>
            <span className="text-white font-bold">{state.seats.join(", ")}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Tickets</span>
            <span className="text-white font-bold">{state.seats.length}</span>
          </div>
          <div className="flex justify-between border-t border-gray-600 pt-3">
            <span className="text-gray-400">Total Paid</span>
            <span className="text-xl font-black" style={{ color: "#f59e0b" }}>Rs. {state.total}</span>
          </div>
        </div>
        <button
          onClick={() => navigate("/")}
          className="w-full py-4 rounded-full font-semibold text-black"
          style={{ background: "#f59e0b" }}
        >
          Book Another Movie
        </button>
      </motion.div>
    </div>
  );
}

export default Confirmation;