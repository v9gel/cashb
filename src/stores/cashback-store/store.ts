import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Cashback } from "./types";

interface CashbackStore {
  cashbacks: Cashback[];
  addCashback: (cashback: Cashback) => void;
  getCashback: (props: {
    cardId?: string;
    month?: number;
  }) => Cashback | undefined
}

export const useCashbackStore = create<CashbackStore>()(
    persist(
      (set, get) => ({
        cashbacks: [],
        getCashback: ({cardId, month}) => {
          let result = get().cashbacks;

          if (cardId) {
            result = result.filter(item => item.cardId === cardId)
          }

          if (month) {
            result = result.filter(item => item.month === month)
          }

          return result[0] ?? undefined;
        },
        addCashback: (cashback) => set((state) => ({ cashbacks: [cashback, ...state.cashbacks] })),
      }),
      {
        name: "cashback-storage",
      }
    )
);
