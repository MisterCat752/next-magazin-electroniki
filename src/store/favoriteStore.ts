import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
}

interface FavoriteStore {
  items: FavoriteItem[];
  toggleFavorite: (product: FavoriteItem) => void;
  clearFavorite: () => void;
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      items: [],

      toggleFavorite: (product) =>
        set((state) => {
          const exists = state.items.some((i) => i.id === product.id);

          return exists
            ? { items: state.items.filter((i) => i.id !== product.id) }
            : { items: [...state.items, product] };
        }),

      clearFavorite: () => set({ items: [] }),
    }),

    {
      name: 'favorite-store',
      partialize: (state) => ({ items: state.items }),
    }
  )
);
