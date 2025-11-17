export const EMBLEM_OPTIONS = [
  {
    id: "rook",
    label: "Tour d'élite",
    description: "Débloquée à 100 trophées",
    requiredTrophy: 100,
    image: "https://picsum.photos/seed/emblem-rook/96/96",
  },
  {
    id: "bishop",
    label: "Archevêque mystique",
    description: "Débloquée à 250 trophées",
    requiredTrophy: 250,
    image: "https://picsum.photos/seed/emblem-bishop/96/96",
  },
  {
    id: "knight",
    label: "Cavalier astral",
    description: "Débloquée à 400 trophées",
    requiredTrophy: 400,
    image: "https://picsum.photos/seed/emblem-knight/96/96",
  },
  {
    id: "queen",
    label: "Reine éternelle",
    description: "Débloquée à 650 trophées",
    requiredTrophy: 650,
    image: "https://picsum.photos/seed/emblem-queen/96/96",
  },
  {
    id: "king",
    label: "Couronne radiante",
    description: "Débloquée à 900 trophées",
    requiredTrophy: 900,
    image: "https://picsum.photos/seed/emblem-king/96/96",
  },
];

export const DEFAULT_EMBLEM_ID = EMBLEM_OPTIONS[0].id;

export const getEmblemById = (id) =>
  EMBLEM_OPTIONS.find((emblem) => emblem.id === id) || EMBLEM_OPTIONS[0];
