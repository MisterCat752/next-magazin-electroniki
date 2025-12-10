import { create } from 'zustand';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
  count: number;
}

interface CartStore {
  items: CartItem[];
  addToCart: (product: Omit<CartItem, 'count'>) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addToCart: (product) =>
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

  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  clearCart: () => set({ items: [] }),
}));
