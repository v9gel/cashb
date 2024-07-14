import { alfabankLogo, ozonLogo, tbankLogo, yandexLogo } from "@/assets/banks";

export interface Bank {
  id: string;
  name: string;
  icon: string;
}

export enum Banks {
  Alfabank = "alfabank",
  Tbank = "tbank",
  Ozon = "ozon",
  Yandex = "yandex",
}

export const BANKS: Bank[] = [
  {
    id: Banks.Alfabank,
    name: "Альфа-банк",
    icon: alfabankLogo,
  },
  {
    id: Banks.Tbank,
    name: "Т-Банк",
    icon: tbankLogo,
  },
  {
    id: Banks.Ozon,
    name: "Ozon",
    icon: ozonLogo,
  },
  {
    id: Banks.Yandex,
    name: "Яндекс",
    icon: yandexLogo,
  },
];

export interface Card {
  id: string;
  title: string;
  bank: string;
}
