import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: number;
  variantId: number;
  name: string;
  price: number;
  imageUrl?: string;
  count: number;
}

interface CartStore {
  items: CartItem[];
  addToCart: (product: Omit<CartItem, 'count'>) => void;
  removeFromCart: (id: number) => void;
  increaseCount: (id: number) => void;
  decreaseCount: (id: number) => void;
  clearCart: () => void;
  totalPrice: () => number;
}
export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.variantId === product.variantId
          );

          if (existing) {
            return {
              items: state.items.map((i) =>
                i.variantId === product.variantId
                  ? { ...i, count: i.count + 1 }
                  : i
              ),
            };
          }

          return {
            items: [...state.items, { ...product, count: 1 }],
          };
        }),

      increaseCount: (id) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, count: i.count + 1 } : i
          ),
        })),

      decreaseCount: (id) =>
        set((state) => {
          const current = state.items.find((i) => i.id === id);
          if (!current) return state;

          if (current.count === 1) {
            return {
              items: state.items.filter((i) => i.id !== id),
            };
          }

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
    }),
    {
      name: 'cart-store',
      partialize: (state) => ({ items: state.items }),
    }
  )
);
