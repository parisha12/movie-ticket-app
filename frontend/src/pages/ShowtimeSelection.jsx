import { useNavigate, useParams } from 'react-router-dom';
import theatres from '../data/theatres';
import showtimes from '../data/showtimes';
import { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';

function ShowtimeSelection() {
  const navigate = useNavigate();

  const { setBooking } = useContext(BookingContext);

  const { movieId, theatreId } = useParams();

  const theatre = theatres.find((t) => t.id === Number(theatreId));

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-3">Select Showtime</h1>

        <p className="text-gray-400 mb-10">{theatre?.name}</p>

        <div className="space-y-8">
          {showtimes.map((group) => (
            <div key={group.id}>
              <h2 className="text-2xl font-bold mb-5">{group.period}</h2>

              <div className="flex flex-wrap gap-4">
                {group.times.map((time) => (
                  <button
                    key={time}
                    onClick={() => {
                      setBooking((prev) => ({
                        ...prev,
                        showtime: time,
                      }));

                      navigate(`/seats/${movieId}`);
                    }}
                    className="bg-[#18181f] border border-gray-700 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black transition px-8 py-4 rounded-xl font-semibold"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowtimeSelection;
