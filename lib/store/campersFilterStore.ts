import { createInitialFilter } from "@/helpers/storeHelpers/createInitialFilter";
import { CampersFilter } from "@/types/filter";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CampersFilterStore = {
  draftFilter: CampersFilter;
  filter: CampersFilter;

  page: number;
  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  resetPage: () => void;

  setDraftFilter: React.Dispatch<React.SetStateAction<CampersFilter>>;
  applyFilter: () => void;
  resetAll: () => void;
  hydrateDraftFromFilter: () => void;
};

export const useCampersFilterStore = create<CampersFilterStore>()(
  persist(
    (set) => ({
      draftFilter: createInitialFilter(),
      filter: createInitialFilter(),

      page: 1,
      setPage: (page) => set({ page }),
      nextPage: () => set((state) => ({ page: state.page + 1 })),
      prevPage: () => set((state) => ({ page: state.page - 1 })),
      resetPage: () => set({ page: 1 }),

      setDraftFilter: (updater) =>
        set((state) => ({
          draftFilter:
            typeof updater === "function"
              ? updater(state.draftFilter)
              : updater,
        })),

      applyFilter: () =>
        set((state) => ({
          filter: { ...state.draftFilter },
          page: 1,
        })),

      resetAll: () =>
        set(() => ({
          draftFilter: createInitialFilter(),
          filter: createInitialFilter(),
          page: 1,
        })),

      hydrateDraftFromFilter: () =>
        set((state) => ({
          draftFilter: { ...state.filter },
        })),
    }),
    {
      name: "campers-filters",
      partialize: (state) => ({
        filter: state.filter,
      }),
    },
  ),
);
