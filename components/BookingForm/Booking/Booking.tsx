import BookingForm from "../BookingForm";
import css from "./Booking.module.css";

const Booking = () => {
  return (
    <section className={css.booking}>
      <h2 className={css.bookingTitle}>Book your campervan now</h2>
      <p className={css.bookingText}>
        Stay connected! We are always ready to help you.
      </p>
      <BookingForm />
    </section>
  );
};

export default Booking;
