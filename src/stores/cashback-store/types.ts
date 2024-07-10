export interface CashbackCategory {
    id: string,
    name: string,
    mcc: (number | [number, number])[],
    bank: string,
}