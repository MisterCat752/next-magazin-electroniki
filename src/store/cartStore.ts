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
  increaseCount: (id: number) => void; // 👈 добавили
  decreaseCount: (id: number) => void;
  clearCart: () => void;
  totalPrice: () => number; //
}

export const useCartStore = create<CartStore>((set, get) => ({
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
  // 👉 увеличить count
  increaseCount: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, count: i.count + 1 } : i
      ),
    })),

  // 👉 уменьшить count
  decreaseCount: (id) =>
    set((state) => {
      const current = state.items.find((i) => i.id === id);
      if (!current) return state;

      // если осталось 1 — удаляем
      if (current.count === 1) {
        return {
          items: state.items.filter((i) => i.id !== id),
        };
      }

      // иначе уменьшаем
      return {
        items: state.items.map((i) =>
          i.id === id ? { ...i, count: i.count - 1 } : i
        ),
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  clearCart: () => set({ items: [] }),
  totalPrice: () => {
    const { items } = get();
    return items.reduce((sum, item) => sum + item.price * item.count, 0);
  },
}));
