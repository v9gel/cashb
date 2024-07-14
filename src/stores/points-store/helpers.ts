import { nanoid } from "nanoid";

export const genPointId = () => {
  return "point-" + nanoid(10);
};
