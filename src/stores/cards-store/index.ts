import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Card } from "./types";

interface BearState {
  cards: Card[];
  addCard: (card: Card) => void;
  removeCard: (id: string) => void;
  // updateCard: (card: Card) => void;
}

export const useCardsStore = create<BearState>()(
    persist(
      (set) => ({
        cards: [],
        addCard: (card) => set((state) => ({ cards: [card, ...state.cards] })),
        removeCard: (id) =>
          set((state) => ({
            cards: state.cards.filter((card) => card.id !== id),
          })),
      }),
      {
        name: "cards-storage",
      }
    )
);
