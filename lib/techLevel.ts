export const techLevel = [
  'Primitive',
  'Iron Age',
  'Industrial',
  'Early 21st Century',
  'Near Futuristic',
  'Far Futuristic',
] as const

export type TechLevel = typeof techLevel[number]
