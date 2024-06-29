import { nanoid } from "nanoid";
import { BANKS, Bank } from "./types";

export const genCardId = () => {
  return "card-" + nanoid(7);
};

export function getBankFromId(id: string): Bank | undefined {
  return BANKS.find((bank: Bank) => bank.id === id);
}
