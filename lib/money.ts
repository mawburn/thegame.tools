export const money = [
  'Barter',
  'Coins only',
  'Paper and coins',
  'Commodities',
  'Stamped paperwork',
  'Electronic',
] as const

export type Money = typeof money[number]
