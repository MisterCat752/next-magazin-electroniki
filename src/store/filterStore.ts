import { create } from 'zustand';

interface SpecFilter {
  name: string;
  value: string;
}

interface FilterStore {
  selectedSpecs: SpecFilter[];
  toggleSpecFilter: (spec: SpecFilter) => void;
  clearFilters: () => void;
}

export const useFilterStore = create<FilterStore>((set, get) => ({
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
}));
