import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SpecFilter {
  name: string;
  value: string;
}

type SortType = 'price_asc' | 'price_desc' | null;

interface FilterStore {
  // filters
  selectedSpecs: SpecFilter[];
  sort: SortType;

  // mobile ui
  mobileFiltersOpen: boolean;
  profileSideBar: boolean;

  // actions
  setSort: (sort: SortType) => void;
  toggleSpecFilter: (spec: SpecFilter) => void;
  clearFilters: () => void;

  openMobileFilters: () => void;
  closeMobileFilters: () => void;
  toggleMobileFilters: () => void;
  toggleProfile: () => void;
}

export const useFilterStore = create<FilterStore>()(
  persist(
    (set, get) => ({
      selectedSpecs: [],
      sort: null,

      mobileFiltersOpen: true,
      profileSideBar: true,

      setSort: (sort) => set({ sort }),

      toggleSpecFilter: (spec) => {
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

      clearFilters: () =>
        set({
          selectedSpecs: [],
          sort: null,
        }),
      toggleMobileFilters: () =>
        set((state) => ({ mobileFiltersOpen: !state.mobileFiltersOpen })),
      toggleProfile: () =>
        set((state) => ({ profileSideBar: !state.profileSideBar })),
      openMobileFilters: () => set({ mobileFiltersOpen: true }),
      closeMobileFilters: () => set({ mobileFiltersOpen: false }),
    }),
    {
      name: 'filter-store',
      partialize: (state) => ({
        selectedSpecs: state.selectedSpecs,
        sort: state.sort,
      }),
    }
  )
);
