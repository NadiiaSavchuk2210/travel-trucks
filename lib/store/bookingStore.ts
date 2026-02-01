import { NewBookingData } from "@/types/camper";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type BookingDraftStore = {
  draft: NewBookingData;
  setDraft: (booking: NewBookingData) => void;
  clearDraft: () => void;
};

const initialDraft: NewBookingData = {
  name: "",
  email: "",
  bookingDate: "",
  comment: "",
};

export const useBookingDraftStore = create<BookingDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (booking) => set(() => ({ draft: booking })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      name: "booking-draft",
      partialize: (state) => ({ draft: state.draft }),
    },
  ),
);
