import alfabankLogo from "@/assets/banks/alfabank.svg";
import tbankLogo from "@/assets/banks/tbank.svg";
import ozonLogo from "@/assets/banks/ozon.svg";
import yandexLogo from "@/assets/banks/yandex.svg";

export interface Bank {
  id: string;
  name: string;
  logo: React.ReactNode;
}

export const BANKS: Bank[] = [
  {
    id: "alfabank",
    name: "Альфа-банк",
    logo: <img src={alfabankLogo} width={28} height={28} alt="alfabank logo" />,
  },
  {
    id: "tbank",
    name: "Т-Банк",
    logo: <img src={tbankLogo} width={28} height={28} alt="tbank logo" />,
  },
  {
    id: "ozon",
    name: "Ozon",
    logo: <img src={ozonLogo} width={28} height={28} alt="ozon logo" />,
  },
  {
    id: "yandex",
    name: "Яндекс",
    logo: <img src={yandexLogo} width={28} height={28} alt="yandex logo" />,
  },
];

export interface Card {
  id: string;
  title: string;
  bank: string;
}
