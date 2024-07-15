import { Banks } from "@/stores/cards-store";
import { CashbackCategory } from "../types";

// источник - https://alfabank.servicecdn.ru/marketing/22/47/marketing/vse_cat.pdf
export const alfabankCategory: CashbackCategory[] = [
  {
    id: "alfabank-category-0",
    bank: Banks.Alfabank,
    mcc: [[0, 9999]],
    name: "Все покупки",
  },
  {
    id: "alfabank-category-1",
    bank: Banks.Alfabank,
    mcc: [
      4784,
      5013,
      5271,
      5511,
      5521,
      [5531, 5533],
      5551,
      5561,
      5571,
      5592,
      5598,
      5599,
      7511,
      7523,
      7531,
      7534,
      7535,
      7538,
      7542,
      7549,
    ],
    name: "Авто",
  },
  {
    id: "alfabank-category-2",
    bank: Banks.Alfabank,
    mcc: [5172, 5541, 5542, 5552, 5983, 9752],
    name: "АЗС",
  },
  {
    id: "alfabank-category-3",
    bank: Banks.Alfabank,
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
    id: "alfabank-category-4",
    bank: Banks.Alfabank,
    mcc: [
      780, 1520, 1711, 1731, 1740, 1750, 1761, 1771, 2842, 5021, 5039, 5046,
      5051, 5072, 5074, 5085, 5198, 5200, 5211, 5231, 5251, 5261, 5712, 5713,
      5714, 5718, 5719, 5950, 5996, 7217, 7641, 7692, 7699,
    ],
    name: "Дом и ремонт",
  },
  {
    id: "alfabank-category-5",
    bank: Banks.Alfabank,
    mcc: [742, 5995],
    name: "Животные",
  },
  {
    id: "alfabank-category-6",
    bank: Banks.Alfabank,
    mcc: [
      4119, 5047, 5122, 5912, 5975, 5976, 8011, 8021, 8031, 8041, 8042, 8043,
      8044, 8049, 8050, 8062, 8071, 8099,
    ],
    name: "Здоровье",
  },
  {
    id: "alfabank-category-7",
    bank: Banks.Alfabank,
    mcc: [5811, 5812, 5813],
    name: "Кафе и рестораны",
  },
  {
    id: "alfabank-category-8",
    bank: Banks.Alfabank,
    mcc: [2741, 5111, 5192, 5942, 5943, 5994],
    name: "Книги",
  },
  {
    id: "alfabank-category-9",
    bank: Banks.Alfabank,
    mcc: [4900],
    name: "Коммунальные услуги",
  },
  {
    id: "alfabank-category-10",
    bank: Banks.Alfabank,
    mcc: [5977, 7230, 7297],
    name: "Красота",
  },
  {
    id: "alfabank-category-11",
    bank: Banks.Alfabank,
    mcc: [8211, 8220, 8241, 8244, 8249, 8299, 8351],
    name: "Образование",
  },
  {
    id: "alfabank-category-12",
    bank: Banks.Alfabank,
    mcc: [
      5137, 5139, 5611, 5621, 5631, 5641, 5651, 5661, 5681, 5691, 5697, 5698,
      5699, 5931, 5948, 7251, 7296, 7631,
    ],
    name: "Одежда и обувь",
  },
  {
    id: "alfabank-category-13",
    bank: Banks.Alfabank,
    mcc: [[3000, 3302], [3500, 3838], 4411, 4511, 4722, 4723, 5962, 7011, 7033],
    name: "Путешествия",
  },
  {
    id: "alfabank-category-14",
    bank: Banks.Alfabank,
    mcc: [
      5733,
      [5945, 5947],
      5949,
      [5970, 5972],
      5998,
      7032,
      7221,
      7395,
      7800,
      7801,
      7829,
      7832,
      7841,
      7911,
      7922,
      7929,
      7932,
      7933,
      7941,
      [7991, 7999],
      9406,
      9754,
    ],
    name: "Развлечения",
  },
  {
    id: "alfabank-category-15",
    bank: Banks.Alfabank,
    mcc: [[4813, 4816], 4821, 4899, 7372, 7375],
    name: "Связь, интернет и ТВ",
  },
  {
    id: "alfabank-category-16",
    bank: Banks.Alfabank,
    mcc: [5655, 5940, 5941],
    name: "Спортивные товары",
  },
  {
    id: "alfabank-category-17",
    bank: Banks.Alfabank,
    mcc: [
      5262, 5300, 5310, 5311, 5331, 5399, 5411, 5422, 5441, 5451, 5462, 5499,
      7278, 9751,
    ],
    name: "Супермаркеты",
  },
  {
    id: "alfabank-category-18",
    bank: Banks.Alfabank,
    mcc: [4121],
    name: "Такси",
  },
  {
    id: "alfabank-category-19",
    bank: Banks.Alfabank,
    mcc: [
      4812, 5044, 5045, 5065, 5722, 5732, 5978, 5997, 7379, 7622, 7623, 7629,
    ],
    name: "Техника",
  },
  {
    id: "alfabank-category-20",
    bank: Banks.Alfabank,
    mcc: [[4011, 4112], 4131, 4729, 4789],
    name: "Транспорт",
  },
  {
    id: "alfabank-category-21",
    bank: Banks.Alfabank,
    mcc: [5814],
    name: "Фастфуд",
  },
  {
    id: "alfabank-category-22",
    bank: Banks.Alfabank,
    mcc: [5193, 5992],
    name: "Цветы",
  },
  {
    id: "alfabank-category-23",
    bank: Banks.Alfabank,
    mcc: [5734, 5735, [5815, 5818]],
    name: "Цифровые товары",
  },
  {
    id: "alfabank-category-24",
    bank: Banks.Alfabank,
    mcc: [5094, 5944],
    name: "Ювелирные изделия",
  },
];
