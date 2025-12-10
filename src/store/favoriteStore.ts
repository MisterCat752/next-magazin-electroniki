import { create } from 'zustand';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
  count: number;
}

interface FavoriteStore {
  items: CartItem[];
  addToFavorite: (product: Omit<CartItem, 'count'>) => void;
  removeFromFavorite: (id: number) => void;
  clearFavorite: () => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  items: [],

  addToFavorite: (product) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === product.id);

      if (existing) {
        // если товар уже есть — увеличиваем count
        return {
          items: state.items.map((i) =>
            i.id === product.id ? { ...i, count: i.count + 1 } : i
          ),
        };
      }

      // если нет — добавляем новый
      return {
        items: [...state.items, { ...product, count: 1 }],
      };
    }),

  removeFromFavorite: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  clearFavorite: () => set({ items: [] }),
}));
