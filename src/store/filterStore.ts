import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SpecFilter {
  name: string;
  value: string;
}

interface FilterStore {
  selectedSpecs: SpecFilter[];
  toggleSpecFilter: (spec: SpecFilter) => void;
  clearFilters: () => void;
}

export const useFilterStore = create<FilterStore>()(
  persist(
    (set, get) => ({
      selectedSpecs: [],

      toggleSpecFilter: (spec: SpecFilter) => {
        const { selectedSpecs } = get();
        const exists = selectedSpecs.some(
          (s) => s.name === spec.name && s.value === spec.value
        );

        set({
          selectedSpecs: exists
            ? selectedSpecs.filter(
                (s) => !(s.name === spec.name && s.value === spec.value)
              )
            : [...selectedSpecs, spec],
        });
      },

      clearFilters: () => set({ selectedSpecs: [] }),
    }),

    {
      name: 'filter-store', // ключ в localStorage
      partialize: (state) => ({ selectedSpecs: state.selectedSpecs }), // сохраняем только фильтры
    }
  )
);
