import { BOOKING_API_BASE_URL } from "@/constants/constants";
import { BookingData, NewBookingData } from "@/types/camper";
import axios from "axios";

const api = axios.create({
  baseURL: BOOKING_API_BASE_URL,
  headers: { "content-type": "application/json" },
});

//* Booking =================================================
export const createBooking = async (
  newBooking: NewBookingData,
): Promise<BookingData> => {
  const { data } = await api.post<BookingData>("/bookings", newBooking);

  return data;
};
