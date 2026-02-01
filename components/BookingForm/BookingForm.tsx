"use client";

import css from "./BookingForm.module.css";
import { useId } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createBooking } from "@/lib/api/booking-api";
import { useBookingDraftStore } from "@/lib/store/bookingStore";
import { NewBookingData } from "@/types/camper";
import { validateForm, validationSchema } from "./BookingForm-validation";

import { TextInput } from "../TextInput/TextInput";
import DatePicker from "../DatePicker/DatePicker";
import Button from "../Button/Button";

export default function BookingForm() {
  const fieldId = useId();
  const queryClient = useQueryClient();
  const { draft, setDraft, clearDraft } = useBookingDraftStore();

  const { mutate, isPending } = useMutation({
    mutationFn: (newBooking: NewBookingData) => createBooking(newBooking),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast.success("Booking created!");
      clearDraft();
    },
    onError() {
      toast.error("Failed to create booking");
    },
  });

  const handleChange = (name: keyof NewBookingData, value: string) => {
    setDraft({ ...draft, [name]: value });
  };

  const handleSubmit = (formData: FormData) => {
    const values = Object.fromEntries(formData) as unknown as NewBookingData;

    const errors = validateForm(values, validationSchema);

    const firstError = errors.name || errors.email || errors.bookingDate;
    if (firstError) {
      toast.error(firstError);
      return;
    }

    mutate(values);
  };

  return (
    <form className={css.bookingForm} action={handleSubmit}>
      <TextInput
        id={`${fieldId}-name`}
        name="name"
        value={draft.name}
        onChange={(e) => handleChange("name", e.target.value)}
        placeholder="Name*"
        required
      />

      <TextInput
        id={`${fieldId}-email`}
        name="email"
        value={draft.email}
        onChange={(e) => handleChange("email", e.target.value)}
        placeholder="Email*"
        required
      />

      <input type="hidden" name="bookingDate" value={draft.bookingDate} />

      <DatePicker
        value={draft.bookingDate}
        onChange={(value) => handleChange("bookingDate", value)}
        placeholderText="Booking date*"
      />

      <TextInput
        id={`${fieldId}-comment`}
        name="comment"
        value={draft.comment}
        onChange={(e) => handleChange("comment", e.target.value)}
        placeholder="Enter your comment"
        multiline
        rows={4}
      />

      <Button
        as="button"
        type="submit"
        className={css.submitButton}
        disabled={isPending}
      >
        {isPending ? "Sending..." : "Send"}
      </Button>
    </form>
  );
}
