import { Banks } from "../cards-store";
import { cashbackCategory } from "./category";
import { CashbackCategory } from "./types";

export const getCashbackCategoryByBank = (bank?: Banks | string) => cashbackCategory.filter(category => category.bank === bank) ?? []

export const getCategoryNameById = (id: string) => cashbackCategory.filter(category => category.id === id)?.[0].name ?? 'Категория не найдена'
export const getCategoryById = (id: string) => {
    return cashbackCategory.find(category => category.id === id) as CashbackCategory | undefined
}
