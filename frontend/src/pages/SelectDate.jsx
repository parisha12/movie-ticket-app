import { useNavigate, useParams } from "react-router-dom";

function SelectDate() {
  const navigate = useNavigate();
  const { movieId } = useParams();

  const dates = [
    { day: "Today", date: "28 Jul" },
    { day: "Tomorrow", date: "29 Jul" },
    { day: "Wed", date: "30 Jul" },
    { day: "Thu", date: "31 Jul" },
    { day: "Fri", date: "1 Aug" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-4">
          Select Date
        </h1>

        <p className="text-gray-400 mb-10">
          Choose your preferred booking date.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

          {dates.map((item, index) => (
            <button
              key={index}
              onClick={() =>
                navigate(`/seats/${movieId}`)
              }
              className="bg-[#1b1b28] hover:bg-yellow-500 hover:text-black transition rounded-2xl py-8"
            >
              <h2 className="text-xl font-bold">
                {item.day}
              </h2>

              <p className="mt-2">
                {item.date}
              </p>
            </button>
          ))}

        </div>

      </div>
    </div>
  );
}

export default SelectDate;