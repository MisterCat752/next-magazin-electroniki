import { create } from 'zustand';

interface FilterStore {
  selected: number[]; // выбранные id фильтров
  toggleFilter: (id: number) => void;
  clearFilters: () => void;
  setFilters: (ids: number[]) => void;
}

export const useFilterStore = create<FilterStore>((set, get) => ({
  selected: [],
  toggleFilter: (id: number) => {
    const { selected } = get();
    if (selected.includes(id)) {
      set({ selected: selected.filter((x) => x !== id) });
    } else {
      set({ selected: [...selected, id] });
    }
  },
  clearFilters: () => set({ selected: [] }),
  setFilters: (ids: number[]) => set({ selected: ids }),
}));
