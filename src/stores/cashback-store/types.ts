export interface CashbackCategory {
    id: string,
    name: string,
    mcc: (number | [number, number])[],
    bank: string,
}

export interface Cashback {
    month: number;
    cardId: string;
    categories: {
      name: string;
      categoryId: string;
      percent: number;
    }[];
}