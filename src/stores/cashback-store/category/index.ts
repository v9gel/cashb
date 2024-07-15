import { CashbackCategory } from "../types";
import { alfabankCategory } from "./alfabank";
import { ozonCategory } from "./ozon";
import { tbankCategory } from "./tbank";
import { vtbCategory } from "./vtb";
import { yandexCategory } from "./yandex";

export const cashbackCategory: CashbackCategory[] = [
  ...alfabankCategory,
  ...ozonCategory,
  ...tbankCategory,
  ...yandexCategory,
  ...vtbCategory,
];
