import { Banks } from "@/stores/cards-store";
import { CashbackCategory } from "../types";

// источник - https://acdn.tinkoff.ru/static/documents/loyalty-program-black.pdf
export const tbankCategory: CashbackCategory[] = [
  {
    id: "tbank-category-0",
    bank: Banks.Tbank,
    mcc: [[0, 9999]],
    name: "Все покупки",
  },
  {
    id: "tbank-category-1",
    bank: Banks.Tbank,
    mcc: [[3000, 3299], 4304, 4415, 4418, 4511, 4582],
    name: "Авиабилеты",
  },
  {
    id: "tbank-category-2",
    bank: Banks.Tbank,
    mcc: [
      5511, 5521, 5531, 5532, 5533, 5571, 7012, 7531, 7534, 7535, 7538, 7542,
      7549,
    ],
    name: "Автоуслуги",
  },
  {
    id: "tbank-category-3",
    bank: Banks.Tbank,
    mcc: [
      [3351, 3398],
      [3400, 3410],
      [3412, 3423],
      [3425, 3439],
      3441,
      7512,
      7513,
      7519,
    ],
    name: "Аренда авто",
  },
  {
    id: "tbank-category-4",
    bank: Banks.Tbank,
    mcc: [5122, 5292, 5295, 5912],
    name: "Аптеки",
  },
  {
    id: "tbank-category-5",
    bank: Banks.Tbank,
    mcc: [5641, 5945],
    name: "Детские товары",
  },
  {
    id: "tbank-category-6",
    bank: Banks.Tbank,
    mcc: [
      1520, 1711, 1731, 1740, 1750, 1761, 1771, 1799, 2791, 2842, 5021, 5039,
      5046, 5051, 5065, 5072, 5074, 5085, 5198, 5200, 5211, 5231, 5251, 5261,
      5415, 5712, 5713, 5714, 5718, 5719, 5722, 7622, 7623, 7629, 7641, 7692,
      7699,
    ],
    name: "Дом, ремонт",
  },
  {
    id: "tbank-category-7",
    bank: Banks.Tbank,
    mcc: [4011, 4111, 4112],
    name: "Ж/д билеты",
  },
  {
    id: "tbank-category-8",
    bank: Banks.Tbank,
    mcc: [742, 5995],
    name: "Животные",
  },
  {
    id: "tbank-category-9",
    bank: Banks.Tbank,
    mcc: [5932, 5937, 5970, 5971, 5972, 5973],
    name: "Искусство",
  },
  {
    id: "tbank-category-10",
    bank: Banks.Tbank,
    mcc: [5111, 5943],
    name: "Канцтовары",
  },
  {
    id: "tbank-category-11",
    bank: Banks.Tbank,
    mcc: [7512, 4121],
    name: "Каршеринг",
  },
  {
    id: "tbank-category-12",
    bank: Banks.Tbank,
    mcc: [7829, 7832, 7841],
    name: "Кино",
  },
  {
    id: "tbank-category-13",
    bank: Banks.Tbank,
    mcc: [2741, 5111, 5192, 5942, 5994],
    name: "Книги",
  },
  {
    id: "tbank-category-14",
    bank: Banks.Tbank,
    mcc: [5977],
    name: "Косметика",
  },
  {
    id: "tbank-category-15",
    bank: Banks.Tbank,
    mcc: [5977, 7230, 7297, 7298],
    name: "Красота",
  },
  {
    id: "tbank-category-16",
    bank: Banks.Tbank,
    mcc: [4111],
    name: "Местный транспорт",
  },
  {
    id: "tbank-category-17",
    bank: Banks.Tbank,
    mcc: [5733, 5735],
    name: "Музыка",
  },
  {
    id: "tbank-category-18",
    bank: Banks.Tbank,
    mcc: [8211, 8220, 8241, 8244, 8249, 8299, 8493, 8494, 8351],
    name: "Образование",
  },
  {
    id: "tbank-category-19",
    bank: Banks.Tbank,
    mcc: [
      5094, 5137, 5139, 5611, 5621, 5631, 5641, 5651, 5661, 5681, 5691, 5697,
      5698, 5699, 5931, 5944, 5949, 5950, 7296, 7631,
    ],
    name: "Одежда, Обувь, Ювелирные изделия и часы / Одежда и обувь онлайн",
  },
  {
    id: "tbank-category-20",
    bank: Banks.Tbank,
    mcc: [4784],
    name: "Платные дороги",
  },
  {
    id: "tbank-category-21",
    bank: Banks.Tbank,
    mcc: [
      7911, 7922, 7929, 7932, 7933, 7941, 7991, 7992, 7993, 7994, 7996, 7997,
      7998, 7999, 8664,
    ],
    name: "Развлечения",
  },
  {
    id: "tbank-category-22",
    bank: Banks.Tbank,
    mcc: [5811, 5812, 5813],
    name: "Рестораны",
  },
  {
    id: "tbank-category-23",
    bank: Banks.Tbank,
    mcc: [5655, 5940, 5941],
    name: "Спорттовары",
  },
  {
    id: "tbank-category-24",
    bank: Banks.Tbank,
    mcc: [5947],
    name: "Сувениры",
  },
  {
    id: "tbank-category-25",
    bank: Banks.Tbank,
    mcc: [
      5297, 5298, 5300, 5411, 5412, 5422, 5441, 5451, 5462, 5499, 5715, 5921,
    ],
    name: "Супермаркеты / Онлайн-супермаркеты",
  },
  {
    id: "tbank-category-26",
    bank: Banks.Tbank,
    mcc: [4121],
    name: "Такси",
  },
  {
    id: "tbank-category-27",
    bank: Banks.Tbank,
    mcc: [5172, 5541, 5542, 5983],
    name: "Топливо",
  },
  {
    id: "tbank-category-28",
    bank: Banks.Tbank,
    mcc: [
      4111, 4121, 4131, 4457, 4468, 4784, 4789, 5013, 5271, 5551, 5561, 5592,
      5598, 5599, 7511, 7523,
    ],
    name: "Транспорт",
  },
  {
    id: "tbank-category-29",
    bank: Banks.Tbank,
    mcc: [5814],
    name: "Фастфуд",
  },
  {
    id: "tbank-category-30",
    bank: Banks.Tbank,
    mcc: [5044, 5045, 5946, 7332, 7333, 7338, 7339, 7395],
    name: "Фото, Видео",
  },
  {
    id: "tbank-category-31",
    bank: Banks.Tbank,
    mcc: [5193, 5992],
    name: "Цветы",
  },
  {
    id: "tbank-category-32",
    bank: Banks.Tbank,
    mcc: [5722, 5732],
    name: "Электроника и техника",
  },
  {
    id: "tbank-category-33",
    bank: Banks.Tbank,
    mcc: [5309],
    name: "Duty Free",
  },
];
