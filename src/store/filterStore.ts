import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SpecFilter {
  name: string;
  value: string;
}

export type SortType = 'price_asc' | 'price_desc' | null;

export interface CategoryFilters {
  selectedSpecs: SpecFilter[];
  sort: SortType;
  priceRange: { min: number; max: number } | null;
}

interface FilterStore {
  filtersByCategory: Record<string, CategoryFilters>;

  // mobile ui (глобально)
  mobileFiltersOpen: boolean;
  profileSideBar: boolean;

  // category actions
  setCategoryFilters: (
    category: string,
    data: Partial<CategoryFilters>,
  ) => void;

  clearCategoryFilters: (category: string) => void;

  // mobile actions
  toggleMobileFilters: () => void;
  openMobileFilters: () => void;
  closeMobileFilters: () => void;
  toggleProfile: () => void;
}

const defaultCategoryState: CategoryFilters = {
  selectedSpecs: [],
  sort: null,
  priceRange: null,
};

export const useFilterStore = create<FilterStore>()(
  persist(
    (set, get) => ({
      filtersByCategory: {},

      mobileFiltersOpen: true,
      profileSideBar: true,

      setCategoryFilters: (category, data) => {
        const current =
          get().filtersByCategory[category] || defaultCategoryState;

        set({
          filtersByCategory: {
            ...get().filtersByCategory,
            [category]: {
              ...current,
              ...data,
            },
          },
        });
      },

      clearCategoryFilters: (category) => {
        set({
          filtersByCategory: {
            ...get().filtersByCategory,
            [category]: defaultCategoryState,
          },
        });
      },

      toggleMobileFilters: () =>
        set((state) => ({ mobileFiltersOpen: !state.mobileFiltersOpen })),

      openMobileFilters: () => set({ mobileFiltersOpen: true }),
      closeMobileFilters: () => set({ mobileFiltersOpen: false }),

      toggleProfile: () =>
        set((state) => ({ profileSideBar: !state.profileSideBar })),
    }),
    {
      name: 'filter-store',
    },
  ),
);
