const LIBRARY_JSON_DATA = [
  {
    "id": 1,
    "emoji": "🌱",
    "title": "Ouvrir l'appli Habitube",
    "needs": [
      "organization",
      "joy"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 2,
    "emoji": "🥣",
    "title": "Faire un repas en commun",
    "needs": [
      "nutrition",
      "joy"
    ],
    "contexts": [
      "home",
      "family"
    ],
    "target": "group"
  },
  {
    "id": 3,
    "emoji": "🥪",
    "title": "Préparer son repas midi",
    "needs": [
      "nutrition",
      "joy"
    ],
    "contexts": [
      "home",
      "office"
    ],
    "target": "group"
  },
  {
    "id": 4,
    "emoji": "🍵",
    "title": "Préparer une boisson chaude",
    "needs": [
      "comfort",
      "slowness"
    ],
    "contexts": [
      "home",
      "office"
    ],
    "target": "individual"
  },
  {
    "id": 5,
    "emoji": "🛒",
    "title": "Préparer sa liste de course",
    "needs": [
      "organization",
      "nutrition"
    ],
    "contexts": [
      "home",
      "family"
    ],
    "target": "individual"
  },
  {
    "id": 6,
    "emoji": "🍎",
    "title": "Manger plus de fruits",
    "needs": [
      "nutrition",
      "health"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 7,
    "emoji": "💧",
    "title": "Remplir sa gourde d’eau",
    "needs": [
      "nutrition",
      "health"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 8,
    "emoji": "💊",
    "title": "Prendre son traitement",
    "needs": [
      "comfort",
      "health"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 9,
    "emoji": "🚭",
    "title": "Ne pas fumer aujourd’hui",
    "needs": [
      "health",
      "calm"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 10,
    "emoji": "🛁",
    "title": "Nettoyer la salle de bains",
    "needs": [
      "cleanliness",
      "hygiene"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 11,
    "emoji": "🧴",
    "title": "Faire son soin du jour",
    "needs": [
      "hygiene",
      "comfort"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 12,
    "emoji": "🛀",
    "title": "Prendre un bain chaud",
    "needs": [
      "comfort",
      "hygiene"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 13,
    "emoji": "🦷",
    "title": "Bien brosser ses dents",
    "needs": [
      "hygiene",
      "health"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 14,
    "emoji": "🛌",
    "title": "Changer son linge de lit",
    "needs": [
      "cleanliness",
      "comfort"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 15,
    "emoji": "🧹",
    "title": "Nettoyer les espaces communs",
    "needs": [
      "cleanliness",
      "comfort"
    ],
    "contexts": [
      "home"
    ],
    "target": "group"
  },
  {
    "id": 16,
    "emoji": "🍽️",
    "title": "Remettre la cuisine en ordre",
    "needs": [
      "cleanliness",
      "cooperation"
    ],
    "contexts": [
      "home"
    ],
    "target": "group"
  },
  {
    "id": 17,
    "emoji": "🛋️",
    "title": "Ranger le salon",
    "needs": [
      "cleanliness",
      "comfort"
    ],
    "contexts": [
      "home"
    ],
    "target": "group"
  },
  {
    "id": 18,
    "emoji": "🚽",
    "title": "Nettoyer les toilettes",
    "needs": [
      "cleanliness",
      "hygiene"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 19,
    "emoji": "🧻",
    "title": "Vérifier les produits ménages",
    "needs": [
      "equipment",
      "cleanliness"
    ],
    "contexts": [
      "home"
    ],
    "target": "group"
  },
  {
    "id": 20,
    "emoji": "🪟",
    "title": "Aérer et ranger la chambre",
    "needs": [
      "cleanliness",
      "equipment"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 21,
    "emoji": "🪥",
    "title": "Ranger ses affaires de toilette",
    "needs": [
      "privacy",
      "hygiene"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 22,
    "emoji": "🗄️",
    "title": "Ranger son bureau",
    "needs": [
      "organization",
      "equipment"
    ],
    "contexts": [
      "home",
      "office"
    ],
    "target": "individual"
  },
  {
    "id": 23,
    "emoji": "🏢",
    "title": "Ranger la salle",
    "needs": [
      "cleanliness",
      "organization"
    ],
    "contexts": [
      "office", "school"
    ],
    "target": "group"
  },
  {
    "id": 24,
    "emoji": "💻",
    "title": "Trier ses outils numériques",
    "needs": [
      "organization",
      "calm"
    ],
    "contexts": [
      "office", "home"
    ],
    "target": "individual"
  },
  {
    "id": 25,
    "emoji": "🖋️",
    "title": "Vérifier les fournitures de bureau",
    "needs": [
      "equipment",
      "organization"
    ],
    "contexts": [
      "office",
      "school"
    ],
    "target": "group"
  },
  {
    "id": 26,
    "emoji": "🗑️",
    "title": "Sortir les poubelles",
    "needs": [
      "cleanliness",
      "cooperation"
    ],
    "contexts": [
      "home"
    ],
    "target": "group"
  },
  {
    "id": 27,
    "emoji": "♻️",
    "title": "Ramasser et trier les déchets",
    "needs": [
      "cleanliness",
      "equipment"
    ],
    "contexts": [
      "home",
      "school", "office"
    ],
    "target": "group"
  },
  {
    "id": 28,
    "emoji": "🗃️",
    "title": "Ranger ses étagères",
    "needs": [
      "organization",
      "privacy"
    ],
    "contexts": [
      "home",
      "social"
    ],
    "target": "individual"
  },
  {
    "id": 29,
    "emoji": "🚌",
    "title": "Préparer son départ",
    "needs": [
      "organization",
      "calm"
    ],
    "contexts": [
      "home",
      "office",
      "school",
      "outdoor"
    ],
    "target": "individual"
  },
  {
    "id": 30,
    "emoji": "🛣️",
    "title": "Choisir un trajet différent",
    "needs": [
      "meaning",
      "calm"
    ],
    "contexts": [
      "outdoor"
    ],
    "target": "individual"
  },
  {
    "id": 31,
    "emoji": "🧰",
    "title": "Réparer un petit souci",
    "needs": [
      "equipment",
      "comfort"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 32,
    "emoji": "🧭",
    "title": "Revoir l’agenda",
    "needs": [
      "organization",
      "privacy"
    ],
    "contexts": [],
    "target": "individual"
  },
  {
    "id": 33,
    "emoji": "🗂️",
    "title": "Gérer l’administratif",
    "needs": [
      "organization",
      "privacy"
    ],
    "contexts": ["office", "home"],
    "target": "individual"
  },
  {
    "id": 34,
    "emoji": "📌",
    "title": "Revoir ses rappels",
    "needs": [
      "organization",
      "communication"
    ],
    "contexts": [
      "office", "home"
    ],
    "target": "individual"
  },
  {
    "id": 35,
    "emoji": "💗",
    "title": "Voir ses amis",
    "needs": [
      "expression",
      "joy"
    ],
    "contexts": [
      "social",
      "family", "outdoor"
    ],
    "target": "group"
  },
  {
    "id": 36,
    "emoji": "💶",
    "title": "Gérer ses finances",
    "needs": [
      "organization",
      "meaning"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 37,
    "emoji": "👚",
    "title": "Trier ses vêtements",
    "needs": [
      "comfort",
      "privacy"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 38,
    "emoji": "🧺",
    "title": "Lancer une machine",
    "needs": [
      "organization",
      "slowness"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 39,
    "emoji": "🌞",
    "title": "Partager sa bonne humeur",
    "needs": [
      "expression",
      "communication"
    ],
    "contexts": [
      "family"
    ],
    "target": "individual"
  },
  {
    "id": 40,
    "emoji": "👌",
    "title": "Écouter sans interrompre",
    "needs": [
      "cooperation",
      "joy"
    ],
    "contexts": [
      "family",
      "social"
    ],
    "target": "individual"
  },
  {
    "id": 41,
    "emoji": "🗣️",
    "title": "Passer une info utile",
    "needs": [
      "communication",
      "expression"
    ],
    "contexts": [
      "office",
      "school",
      "social"
    ],
    "target": "individual"
  },
  {
    "id": 42,
    "emoji": "📞",
    "title": "Contacter un proche",
    "needs": [
      "communication",
      "slowness"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 43,
    "emoji": "🤝",
    "title": "Voir sa famille",
    "needs": [
      "joy",
      "inclusion"
    ],
    "contexts": [
      "social"
    ],
    "target": "individual"
  },
  {
    "id": 44,
    "emoji": "🧡",
    "title": "Apporter du réconfort",
    "needs": [
      "communication",
      "inclusion"
    ],
    "contexts": [
      "school"
    ],
    "target": "individual"
  },
  {
    "id": 45,
    "emoji": "😊",
    "title": "Sourire à un inconnu",
    "needs": [
      "joy",
      "inclusion"
    ],
    "contexts": [],
    "target": "individual"
  },
  {
    "id": 46,
    "emoji": "🐈",
    "title": "Prendre soin de",
    "needs": [
      "comfort",
      "inclusion"
    ],
    "contexts": [
      "family"
    ],
    "target": "individual"
  },
  {
    "id": 47,
    "emoji": "💞",
    "title": "Dire un merci précis",
    "needs": [
      "expression",
      "participation"
    ],
    "contexts": [
      "family"
    ],
    "target": "individual"
  },
  {
    "id": 48,
    "emoji": "💌",
    "title": "Laisser un mot doux",
    "needs": [
      "expression",
      "privacy"
    ],
    "contexts": [
      "family"
    ],
    "target": "individual"
  },
  {
    "id": 49,
    "emoji": "✌️",
    "title": "Marquer un mini-succès",
    "needs": [
      "participation",
      "joy"
    ],
    "contexts": [
      "home",
      "family",
      "office",
      "school"
    ],
    "target": "individual"
  },
  {
    "id": 50,
    "emoji": "🙌",
    "title": "Valoriser une bonne idée",
    "needs": [
      "communication",
      "participation"
    ],
    "contexts": [
      "office",
      "school",
      "social"
    ],
    "target": "individual"
  },
  {
    "id": 51,
    "emoji": "🎁",
    "title": "Se montrer généreux",
    "needs": [
      "cooperation",
      "expression"
    ],
    "contexts": [
      "home",
      "office",
      "school"
    ],
    "target": "individual"
  },
  {
    "id": 52,
    "emoji": "💬",
    "title": "Briser la glace",
    "needs": [
      "inclusion",
      "communication"
    ],
    "contexts": [
      "school",
      "social"
    ],
    "target": "group"
  },
  {
    "id": 53,
    "emoji": "💡",
    "title": "Faire un geste sympa",
    "needs": [
      "cooperation",
      "participation"
    ],
    "contexts": [
      "school",
      "office",
      "social"
    ],
    "target": "individual"
  },
  {
    "id": 54,
    "emoji": "💆‍♀️",
    "title": "Offrir un geste apaisant",
    "needs": [
      "comfort",
      "expression"
    ],
    "contexts": [
      "home",
      "social"
    ],
    "target": "individual"
  },
  {
    "id": 55,
    "emoji": "🤐",
    "title": "Éviter un gros mot",
    "needs": [
      "communication",
      "calm"
    ],
    "contexts": [
      "home",
      "school"
    ],
    "target": "individual"
  },
  {
    "id": 56,
    "emoji": "🌼",
    "title": "Penser à un bon moment",
    "needs": [
      "joy",
      "privacy"
    ],
    "contexts": [],
    "target": "individual"
  },
  {
    "id": 57,
    "emoji": "🧠",
    "title": "Se rappeler un souvenir doux",
    "needs": [
      "joy",
      "privacy"
    ],
    "contexts": [],
    "target": "individual"
  },
  {
    "id": 58,
    "emoji": "🧘",
    "title": "Créer une soirée détente",
    "needs": [
      "calm",
      "slowness"
    ],
    "contexts": [
      "home",
      "family"
    ],
    "target": "group"
  },
  {
    "id": 59,
    "emoji": "🌙",
    "title": "Se coucher avant 23h",
    "needs": [
      "rest",
      "calm"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 60,
    "emoji": "📵",
    "title": "Couper les écrans après 21h",
    "needs": [
      "slowness",
      "rest"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 61,
    "emoji": "🏡",
    "title": "Créer une ambiance agréable",
    "needs": [
      "nature",
      "slowness"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 62,
    "emoji": "😴",
    "title": "Faire une sieste courte",
    "needs": [
      "rest",
      "calm"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 63,
    "emoji": "🌬️",
    "title": "Respirer lentement 2 min",
    "needs": [
      "slowness",
      "rest"
    ],
    "contexts": [
      "office",
      "school",
      "outdoor"
    ],
    "target": "individual"
  },
  {
    "id": 64,
    "emoji": "🧘",
    "title": "Méditer 5 min en silence",
    "needs": [
      "calm",
      "slowness"
    ],
    "contexts": [
      "home",
      "school"
    ],
    "target": "individual"
  },
  {
    "id": 65,
    "emoji": "👀",
    "title": "Contempler le paysage",
    "needs": [
      "nature",
      "rest"
    ],
    "contexts": [
      "outdoor"
    ],
    "target": "individual"
  },
  {
    "id": 66,
    "emoji": "🌬️",
    "title": "Prendre l’air 5 min",
    "needs": [
      "nature",
      "movement"
    ],
    "contexts": [
      "office",
      "outdoor"
    ],
    "target": "individual"
  },
  {
    "id": 67,
    "emoji": "🌳",
    "title": "Se connecter à la nature",
    "needs": [
      "nature",
      "rest"
    ],
    "contexts": [
      "social",
      "outdoor"
    ],
    "target": "individual"
  },
  {
    "id": 68,
    "emoji": "🕊️",
    "title": "Détendre l'ambiance",
    "needs": [
      "calm",
      "participation"
    ],
    "contexts": [
      "school",
      "office",
      "social"
    ],
    "target": "group"
  },
  {
    "id": 69,
    "emoji": "🫂",
    "title": "Veiller au collectif",
    "needs": [
      "inclusion",
      "cooperation"
    ],
    "contexts": [
      "school",
      "office",
      "social"
    ],
    "target": "group"
  },
  {
    "id": 70,
    "emoji": "🤸",
    "title": "Faire un réveil corporel",
    "needs": [
      "movement",
      "comfort"
    ],
    "contexts": [],
    "target": "individual"
  },
  {
    "id": 71,
    "emoji": "💪",
    "title": "Faire 30 min de sport",
    "needs": [
      "movement",
      "comfort"
    ],
    "contexts": [
      "outdoor", "home"
    ],
    "target": "individual"
  },
  {
    "id": 72,
    "emoji": "🤸‍♂️",
    "title": "Faire des étirements",
    "needs": [
      "movement",
      "comfort"
    ],
    "contexts": [
      "outdoor"
    ],
    "target": "individual"
  },
  {
    "id": 73,
    "emoji": "👏",
    "title": "Applaudir une réussite",
    "needs": [
      "joy",
      "participation"
    ],
    "contexts": [
      "home",
      "office",
      "school",
      "social"
    ],
    "target": "group"
  },
  {
    "id": 74,
    "emoji": "📸",
    "title": "Photographier un beau détail",
    "needs": [
      "nature",
      "expression"
    ],
    "contexts": [
      "home",
      "outdoor"
    ],
    "target": "individual"
  },
  {
    "id": 75,
    "emoji": "🎧",
    "title": "Mettre une musique calme",
    "needs": [
      "nature",
      "calm"
    ],
    "contexts": [
      "home"
    ],
    "target": "individual"
  },
  {
    "id": 76,
    "emoji": "🎶",
    "title": "Fredonner une chanson",
    "needs": [
      "expression",
      "entertainment"
    ],
    "contexts": [
      "social"
    ],
    "target": "individual"
  },
  {
    "id": 77,
    "emoji": "🎮",
    "title": "Regarder une comédie",
    "needs": [
      "joy",
      "entertainment"
    ],
    "contexts": [],
    "target": "individual"
  },
  {
    "id": 78,
    "emoji": "🎲",
    "title": "Faire une activité ludique",
    "needs": [
      "entertainment",
      "participation"
    ],
    "contexts": [
      "family",
      "social",
      "school",
      "outdoor"
    ],
    "target": "group"
  },
  {
    "id": 79,
    "emoji": "🧩",
    "title": "Apprendre 3 nouveaux mots",
    "needs": [
      "meaning",
      "expression"
    ],
    "contexts": [],
    "target": "individual"
  },
  {
    "id": 80,
    "emoji": "🖼️",
    "title": "Faire une sortie culturelle",
    "needs": [
      "joy",
      "meaning"
    ],
    "contexts": [
      "social",
      "outdoor"
    ],
    "target": "individual"
  },
  {
    "id": 81,
    "emoji": "✍️",
    "title": "Écrire 3 lignes",
    "needs": [
      "privacy",
      "expression"
    ],
    "contexts": [],
    "target": "individual"
  },
  {
    "id": 82,
    "emoji": "🖼️",
    "title": "Ajouter une touche déco",
    "needs": [
      "comfort",
      "joy"
    ],
    "contexts": [
      "home",
      "office",
      "social"
    ],
    "target": "group"
  },
  {
    "id": 83,
    "emoji": "🪜",
    "title": "Prendre les escaliers",
    "needs": [
      "movement",
      "comfort"
    ],
    "contexts": [
      "office",
      "school",
      "social"
    ],
    "target": "individual"
  },
  {
    "id": 84,
    "emoji": "📘",
    "title": "Lire 10 pages",
    "needs": [
      "rest",
      "meaning"
    ],
    "contexts": [
      "home",
      "office"
    ],
    "target": "individual"
  },
  {
    "id": 85,
    "emoji": "🔧",
    "title": "Faire du bricolage",
    "needs": [
      "equipment",
      "joy"
    ],
    "contexts": [
      "home",
      "social"
    ],
    "target": "individual"
  },
  {
    "id": 86,
    "emoji": "🕺",
    "title": "Danser librement",
    "needs": [
      "movement",
      "joy"
    ],
    "contexts": [
      "home",
      "social",
      "outdoor"
    ],
    "target": "individual"
  },
  {
    "id": 87,
    "emoji": "📻",
    "title": "Écouter un podcast",
    "needs": [
      "rest",
      "meaning"
    ],
    "contexts": [],
    "target": "individual"
  },
  {
    "id": 88,
    "emoji": "🤣",
    "title": "Apporter une touche d’humour",
    "needs": [
      "communication",
      "entertainment"
    ],
    "contexts": [
      "school",
      "social"
    ],
    "target": "group"
  },
  {
    "id": 89,
    "emoji": "🌸",
    "title": "Sentir un parfum doux",
    "needs": [
      "calm",
      "meaning"
    ],
    "contexts": [
      "home",
      "outdoor"
    ],
    "target": "individual"
  },
  {
    "id": 90,
    "emoji": "🍳",
    "title": "Préparer un repas sain",
    "needs": [
      "nutrition",
      "health"
    ],
    "contexts": [
      "home",
      "family"
    ],
    "target": "individual"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = LIBRARY_JSON_DATA;
  module.exports.default = LIBRARY_JSON_DATA;
}
if (typeof window !== "undefined") {
  window.LIBRARY_JSON_DATA = LIBRARY_JSON_DATA;
}
