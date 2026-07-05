import { createContext, useState } from "react";

export const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [booking, setBooking] = useState({
    movie: null,
    date: null,
    theatre: null,
    showtime: null,
  });

  return (
    <BookingContext.Provider value={{ booking, setBooking }}>
      {children}
    </BookingContext.Provider>
  );
}