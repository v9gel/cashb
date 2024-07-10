import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Card } from "./types";

interface CardStore {
  cards: Card[];
  addCard: (card: Card) => void;
  removeCard: (id: string) => void;
  updateCard: (card: Card) => void;
}

export const useCardsStore = create<CardStore>()(
    persist(
      (set) => ({
        cards: [],
        addCard: (card) => set((state) => ({ cards: [card, ...state.cards] })),
        removeCard: (id) =>
          set((state) => ({
            cards: state.cards.filter((card) => card.id !== id),
          })),
        updateCard: (card) => set((state) => {
          const index = state.cards.findIndex(_card => _card.id === card.id)
          
          return ({ cards: 
            [
              ...state.cards.slice(0, index),
              card,
              ...state.cards.slice(index + 1)
            ]
           })
        }),
      }),
      {
        name: "cards-storage",
      }
    )
);
