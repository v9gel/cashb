import { Banks } from "@/stores/cards-store";
import { CashbackCategory } from "../types";

// источник - https://yandex.ru/legal/account_welcome_points/
export const yandexCategory: CashbackCategory[] = [
    {
        id: "yandex-category-1",
        bank: Banks.Yandex,
        mcc: [5811, 5812, 5813, 5814],
        name: "Кафе, рестораны и бары",
    },
    {
        id: "yandex-category-2",
        bank: Banks.Yandex,
        mcc: [8211, 8220, 8241, 8244, 8249, 8299, 8351, 8493, 8494],
        name: "Образование",
    },
    {
        id: "yandex-category-3",
        bank: Banks.Yandex,
        mcc: [5137, 5139, 5611, 5621, 5631, 5641, 5651, 5661, 5681, 5691, 5697, 5698, 5699, 5931, 5949, 7296],
        name: "Одежда и обувь",
    },
    {
        id: "yandex-category-4",
        bank: Banks.Yandex,
        mcc: [7012, 7911, 7922, 7929, 7932, 7933, 7941, 7991, 7992, 7993, 7994, 7996, 7997, 7998, 7999, 8664],
        name: "Развлечения",
    },
    {
        id: "yandex-category-5",
        bank: Banks.Yandex,
        mcc: [4111, 4131, 4789],
        name: "Городской транспорт",
    },
    {
        id: "yandex-category-6",
        bank: Banks.Yandex,
        mcc: [5193, 5992],
        name: "Цветы",
    },
    {
        id: "yandex-category-7",
        bank: Banks.Yandex,
        mcc: [5122, 5292, 5295, 5912],
        name: "Аптеки",
    },
    {
        id: "yandex-category-8",
        bank: Banks.Yandex,
        mcc: [1520, 1711, 1731, 1740, 1750, 1761, 1771, 1799, 2791, 2842, 5021, 5039, 5046, 5051, 5065, 5072, 5074, 5085, 5198, 5200, 5211, 5231, 5251, 5261, 5415, 5712, 5713, 5714, 5718, 5719, 5722, 7622, 7623, 7629, 7641, 7692, 7699],
        name: "Дом и ремонт",
    },
    {
        id: "yandex-category-9",
        bank: Banks.Yandex,
        mcc: [5977, 7230, 7297, 7298],
        name: "Красота",
    },
    {
        id: "yandex-category-10",
        bank: Banks.Yandex,
        mcc: [5655, 5940, 5941],
        name: "Спортивные товары",
    },
    {
        id: "yandex-category-11",
        bank: Banks.Yandex,
        mcc: [8011, 8021, 8031, 8041, 8042, 8043],
        name: "Медицина",
    },
    {
        id: "yandex-category-12",
        bank: Banks.Yandex,
        mcc: [5297, 5298, 5300, 5411, 5412, 5422, 5441, 5451, 5462, 5499, 5715, 5921],
        name: "Супермаркеты",
    },
    {
        id: "yandex-category-13",
        bank: Banks.Yandex,
        mcc: [7832, 7841, 7829],
        name: "Кино",
    },
    {
        id: "yandex-category-14",
        bank: Banks.Yandex,
        mcc: [742, 5995],
        name: "Животные",
    },
    {
        id: "yandex-category-15",
        bank: Banks.Yandex,
        mcc: [2741, 5111, 5192, 5942, 5994],
        name: "Книги",
    },
    {
        id: "yandex-category-16",
        bank: Banks.Yandex,
        mcc: [5094, 5944],
        name: "Ювелирные изделия",
    },
    {
        id: "yandex-category-17",
        bank: Banks.Yandex,
        mcc: [4784, 7033, 7523],
        name: "Платные дороги и парковки",
    },
]
