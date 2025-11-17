export const BANNER_OPTIONS = [
  {
    id: "iron",
    label: "1 partie",
    description: "Débloquée dès votre première partie",
    requiredGames: 1,
    className: "rank-iron",
  },
  {
    id: "bronze",
    label: "5 parties",
    description: "Montre votre constance",
    requiredGames: 5,
    className: "rank-bronze",
  },
  {
    id: "silver",
    label: "10 parties",
    description: "Reflets métalliques",
    requiredGames: 10,
    className: "rank-silver",
  },
  {
    id: "gold",
    label: "20 parties",
    description: "L'éclat des joueurs aguerris",
    requiredGames: 20,
    className: "rank-gold",
  },
  {
    id: "plat",
    label: "40 parties",
    description: "Palette turquoise premium",
    requiredGames: 40,
    className: "rank-plat",
  },
  {
    id: "diamond",
    label: "60 parties",
    description: "Effets glace-électrique",
    requiredGames: 60,
    className: "rank-diamond",
  },
  {
    id: "ascendant",
    label: "80 parties",
    description: "Halo vert vibrant",
    requiredGames: 80,
    className: "rank-ascendant",
  },
  {
    id: "immortal",
    label: "120 parties",
    description: "Aura violette mystique",
    requiredGames: 120,
    className: "rank-immortal",
  },
  {
    id: "radiant",
    label: "200 parties",
    description: "Rayonnement ultime",
    requiredGames: 200,
    className: "rank-radiant",
  },

  {
    id: "challenger",
    label: "250 parties",
    description: "LE GOAT",
    requiredGames: 250,
    className: "rank-challenger",
  },
];

export const DEFAULT_BANNER_ID = BANNER_OPTIONS[0].id;

export const getBannerById = (id) =>
  BANNER_OPTIONS.find((banner) => banner.id === id) ?? BANNER_OPTIONS[0];
