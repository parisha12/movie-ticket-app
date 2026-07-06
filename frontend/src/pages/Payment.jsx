import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [method, setMethod] = useState('');
  const [loading, setLoading] = useState(false);

  if (!state) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center text-white">
        <h1 className="text-3xl font-bold">No Booking Found</h1>
      </div>
    );
  }

  const { movie, date, theatre, showtime, seats, total } = state;

  async function handlePayment() {
    if (!method) {
      alert('Please select a payment method.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      navigate('/confirmation', {
        state: {
          ...state,
          paymentMethod: method,
        },
      });
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-black text-white mb-2">Payment</h1>

          <p className="text-gray-400 mb-10">Complete your booking.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Booking Summary */}

            <div className="bg-[#18181f] rounded-2xl border border-gray-700 p-6">
              <h2 className="text-2xl font-bold text-white mb-6">
                Booking Summary
              </h2>

              <div className="space-y-5">
                <div className="flex justify-between">
                  <span className="text-gray-400">Movie</span>

                  <span className="text-white font-semibold">{movie}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Date</span>

                  <span className="text-white font-semibold">
                    {date.day} ({date.date})
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Theatre</span>

                  <span className="text-white font-semibold">
                    {theatre.name}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Showtime</span>

                  <span className="text-white font-semibold">{showtime}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Seats</span>

                  <span className="text-white font-semibold">
                    {seats.join(', ')}
                  </span>
                </div>

                <hr className="border-gray-700" />

                <div className="flex justify-between">
                  <span className="text-xl font-bold text-white">Total</span>

                  <span className="text-2xl font-black text-yellow-400">
                    Rs. {total}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}

            <div className="bg-[#18181f] rounded-2xl border border-gray-700 p-6">
              <h2 className="text-2xl font-bold text-white mb-6">
                Select Payment Method
              </h2>
              <div className="space-y-4">
                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition ${
                    method === 'eSewa'
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-gray-700 hover:border-green-500'
                  }`}
                >
                  <div>
                    <h3 className="text-white font-semibold">🟢 eSewa</h3>
                    <p className="text-sm text-gray-400">
                      Pay securely with eSewa
                    </p>
                  </div>

                  <input
                    type="radio"
                    name="payment"
                    checked={method === 'eSewa'}
                    onChange={() => setMethod('eSewa')}
                  />
                </label>

                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition ${
                    method === 'Khalti'
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-gray-700 hover:border-purple-500'
                  }`}
                >
                  <div>
                    <h3 className="text-white font-semibold">🟣 Khalti</h3>
                    <p className="text-sm text-gray-400">
                      Pay using Khalti wallet
                    </p>
                  </div>

                  <input
                    type="radio"
                    name="payment"
                    checked={method === 'Khalti'}
                    onChange={() => setMethod('Khalti')}
                  />
                </label>

                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition ${
                    method === 'Card'
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-gray-700 hover:border-blue-500'
                  }`}
                >
                  <div>
                    <h3 className="text-white font-semibold">
                      💳 Credit / Debit Card
                    </h3>
                    <p className="text-sm text-gray-400">
                      Visa, MasterCard & others
                    </p>
                  </div>

                  <input
                    type="radio"
                    name="payment"
                    checked={method === 'Card'}
                    onChange={() => setMethod('Card')}
                  />
                </label>

                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition ${
                    method === 'Cash'
                      ? 'border-yellow-500 bg-yellow-500/10'
                      : 'border-gray-700 hover:border-yellow-500'
                  }`}
                >
                  <div>
                    <h3 className="text-white font-semibold">
                      💵 Cash at Counter
                    </h3>
                    <p className="text-sm text-gray-400">
                      Pay before the movie starts
                    </p>
                  </div>

                  <input
                    type="radio"
                    name="payment"
                    checked={method === 'Cash'}
                    onChange={() => setMethod('Cash')}
                  />
                </label>
              </div>

              <button
                onClick={handlePayment}
                disabled={loading}
                className="w-full mt-8 py-4 rounded-xl font-bold text-lg bg-yellow-500 hover:bg-yellow-400 transition disabled:bg-gray-600 disabled:text-gray-300"
              >
                {loading ? 'Processing Payment...' : `Pay Rs. ${total}`}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Payment;
