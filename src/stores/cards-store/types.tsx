import alfabankLogo from "@/assets/banks/alfabank.svg";
import tbankLogo from "@/assets/banks/tbank.svg";
import ozonLogo from "@/assets/banks/ozon.svg";
import yandexLogo from "@/assets/banks/yandex.svg";

export interface Bank {
  id: string;
  name: string;
  logo: React.ReactNode;
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
    logo: <img src={alfabankLogo} width={28} height={28} alt="alfabank logo" />,
  },
  {
    id: Banks.Tbank,
    name: "Т-Банк",
    logo: <img src={tbankLogo} width={28} height={28} alt="tbank logo" />,
  },
  {
    id: Banks.Ozon,
    name: "Ozon",
    logo: <img src={ozonLogo} width={28} height={28} alt="ozon logo" />,
  },
  {
    id: Banks.Yandex,
    name: "Яндекс",
    logo: <img src={yandexLogo} width={28} height={28} alt="yandex logo" />,
  },
];

export interface Card {
  id: string;
  title: string;
  bank: string;
}
