import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Point } from "./types";

interface PointsStore {
  points: Point[];
  lastViewIds: string[];
  addPoint: (point: Point) => void;
  markView: (id: string) => void;
  removePoint: (id: string) => void;
}

export const usePointsStore = create<PointsStore>()(
    persist(
      (set) => ({
        points: [],
        lastViewIds: [],
        addPoint: (point) => set((state) => ({ points: [point, ...state.points] })),
        markView: (id) => set((state) => ({ lastViewIds: [...new Set([id, ...state.lastViewIds])] })),
        removePoint: (id) =>
          set((state) => ({
            points: state.points.filter((point) => point.id !== id),
            lastViewIds: state.lastViewIds.filter(lastViewId => lastViewId !== id)
          })),
      }),
      {
        name: "points-storage",
      }
    )
);
