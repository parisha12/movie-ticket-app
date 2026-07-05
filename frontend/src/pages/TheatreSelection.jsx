import { useNavigate, useParams } from 'react-router-dom';
import theatres from '../data/theatres';
import { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';

function TheatreSelection() {
  const navigate = useNavigate();
  const { setBooking } = useContext(BookingContext);
  const { movieId } = useParams();

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-3">Select Theatre</h1>

        <p className="text-gray-400 mb-10">Choose your preferred cinema.</p>

        <div className="space-y-6">
          {theatres.map((theatre) => (
            <div
              key={theatre.id}
              onClick={() => {
                setBooking((prev) => ({
                  ...prev,
                  theatre,
                }));

                navigate(`/showtime/${movieId}/${theatre.id}`);
              }}
              className="bg-[#18181f] border border-gray-700 rounded-2xl p-6 hover:border-yellow-500 hover:scale-[1.02] transition cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-2">🎬 {theatre.name}</h2>

                  <p className="text-gray-400 mb-4">📍 {theatre.location}</p>

                  <div className="flex flex-wrap gap-2">
                    {theatre.facilities.map((facility, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-sm px-3 py-1 rounded-full"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="bg-yellow-500 text-black px-5 py-3 rounded-xl font-bold hover:bg-yellow-400">
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TheatreSelection;
