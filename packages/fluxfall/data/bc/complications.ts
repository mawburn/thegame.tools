export const compTypes = ['Lancer', 'Cultural', 'Environmental', 'NPC', 'Faction', 'Quantum Hub']

export type CompTypes = typeof compTypes[number]

interface Complications {
  [key: string]: string[]
}

export const complications: Complications = {
  Lancer: [
    '+1 to highest stat, -1 to lowest',
    '-1 to highest stat, +1 to lowest',
    '+2 to highest stat. -2 to lowest',
    '-2 to highest stat, +2 to lowest',
    '1 Special Gear turned weird',
    'Secret Objective changes (consult GM)]',
  ],
  Cultural: [
    'Tech Level changes',
    'Money, Language, Clothing changes',
    'Ongoing Event changes',
    'Religion (Devotion) changes',
    'Tradition (Custom) changes',
    'Deviation (Flashpoint) changes',
  ],
  Environmental: [
    'Storm of the century',
    'A raging health crisis',
    'Middle of a total war',
    'Mass exodus of the population',
    'Temperature is critically hot',
    'The Ice Age has cometh',
  ],
  NPC: [
    'A main NPC’s allegiance has flipped',
    'A Lancer’s doppelganger shows up',
    'A Lancer’s double shows up',
    'Enemy NPC now has upper hand',
    'Friendly NPC has now never existed',
    'Team interrupts a huge ceremony',
  ],
  Faction: [
    'ChronoCorp-sponsored colonists',
    'Huge (Home) Military occupation',
    'Science Foundation domed the area',
    'Continuum members persecuted',
    'Rich Tourist has long taken over',
    'Showdown between two factions',
  ],
  'Quantum Hub': [
    'Shrinks to the size of a grain of rice',
    'Blows up to the size of a hubcap',
    'Blows up to the size of a dinner table',
    'Blows up to the size of a car',
    'Becomes sticky beyond belief',
    'Becomes slippery beyond reason',
  ],
}
