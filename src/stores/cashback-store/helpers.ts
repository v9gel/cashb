import { Banks } from "../cards-store";
import { cashbackCategory } from "./category";

export const getCashbackCategoryByBank = (bank: Banks) => cashbackCategory.filter(category => category.bank === bank)

export const getCategoryNameById = (id: string) => cashbackCategory.filter(category => category.id === id)?.[0].name ?? 'Категория не найдена'
