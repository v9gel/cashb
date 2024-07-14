import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Point } from "./types";

interface PointsStore {
  points: Point[];
  addPoint: (point: Point) => void;
}

export const usePointsStore = create<PointsStore>()(
    persist(
      (set) => ({
        points: [],
        addPoint: (point) => set((state) => ({ points: [point, ...state.points] })),
      }),
      {
        name: "points-storage",
      }
    )
);
