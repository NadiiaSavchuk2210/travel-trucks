import { Camper } from "@/types/camper";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CampersStore = {
  campers: Camper[];
  campersFavorite: Camper[];
  setCampers: (campers: Camper[]) => void;
  clearCampers: () => void;
  clearCamperFavorite: () => void;
  toggleCamperFavorite: (camper: Camper) => void;
};

export const useCampersStore = create<CampersStore>()(
  persist(
    (set) => ({
      campers: [],
      campersFavorite: [],

      setCampers: (campers: Camper[]) => set({ campers }),

      clearCampers: () => set({ campers: [] }),
      clearCamperFavorite: () => set({ campersFavorite: [] }),

      toggleCamperFavorite: (camper: Camper) =>
        set((state) => {
          const favoriteIds = new Set(
            state.campersFavorite.map((camperItem) => camperItem.id),
          );

          if (favoriteIds.has(camper.id)) {
            return {
              campersFavorite: state.campersFavorite.filter(
                (camperItem) => camperItem.id !== camper.id,
              ),
            };
          } else {
            return { campersFavorite: [...state.campersFavorite, camper] };
          }
        }),
    }),
    {
      name: "campers-store",
      partialize: (state) => ({
        campers: state.campers,
        campersFavorite: state.campersFavorite,
      }),
    },
  ),
);
