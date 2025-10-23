import { create } from "zustand";
import { persist } from 'zustand/middleware'

export const useCartStore = create(
    persist(
        (set) => ({
            items: [],

            addItem: (item) =>
                set((state) => {
                    const existing = state.items.find((i) => i.title === item.title);
                    if (existing) {
                        return {
                            items: state.items.map((i) =>
                                i.title === item.title
                                    ? { ...i, quantity: i.quantity + item.quantity }
                                    : i
                            ),
                        };
                    }
                    return { items: [...state.items, item] };
                }),

            removeItem: (title) =>
                set((state) => ({
                    items: state.items.filter((i) => i.title !== title),
                })),

            clearCart: () => set({ items: [] }),

            incrementQuantity: (title) =>
                set((state) => ({
                    items: state.items.map((i) =>
                        i.title === title
                            ? { ...i, quantity: i.quantity + 1 }
                            : i
                    ),
                })),

            decrementQuantity: (title) =>
                set((state) => ({
                    items: state.items.map((i) =>
                        i.title === title
                            ? { ...i, quantity: Math.max(i.quantity - 1, 0) }
                            : i
                    ),
                })),
        })), { name: "cart-storage" }
);