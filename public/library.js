const LIBRARY_JSON_DATA = [
  {
    "id": 1,
    "emoji": "🌱",
    "title": "Ouvrir l'application Habitube",
    "needs": [
      "organization",
      "joy"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 2,
    "emoji": "🥣",
    "title": "Préparer un petit-déjeuner commun",
    "needs": [
      "nutrition",
      "joy"
    ],
    "contexts": [
      "home",
      "family"
    ],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 3,
    "emoji": "🥪",
    "title": "Préparer une collation saine",
    "needs": [
      "nutrition",
      "joy"
    ],
    "contexts": [
      "home",
      "office"
    ],
    "frequency": 3,
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
    "frequency": 3,
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
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 6,
    "emoji": "🍎",
    "title": "Manger plus de fruits",
    "needs": [
      "nutrition",
      "comfort"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 7,
    "emoji": "💧",
    "title": "Remplir sa gourde d’eau",
    "needs": [
      "nutrition",
      "safety"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 8,
    "emoji": "💊",
    "title": "Prendre son traitement",
    "needs": [
      "comfort",
      "safety"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 9,
    "emoji": "🚭",
    "title": "Ne pas fumer aujourd’hui",
    "needs": [
      "safety",
      "calm"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 7,
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
    "frequency": 0.5,
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
    "frequency": 7,
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
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 13,
    "emoji": "🦷",
    "title": "Bien brosser ses dents",
    "needs": [
      "hygiene",
      "safety"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 7,
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
    "frequency": 0.5,
    "target": "individual"
  },
  {
    "id": 15,
    "emoji": "🧹",
    "title": "Nettoyer couloir et entrée",
    "needs": [
      "cleanliness",
      "safety"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 1,
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
    "frequency": 3,
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
    "frequency": 3,
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
    "frequency": 1,
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
    "frequency": 0.5,
    "target": "group"
  },
  {
    "id": 20,
    "emoji": "🛏️",
    "title": "Aérer et ranger la chambre",
    "needs": [
      "cleanliness",
      "equipment"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 7,
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
    "frequency": 1,
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
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 23,
    "emoji": "🏢",
    "title": "Ranger la salle de réunion",
    "needs": [
      "cleanliness",
      "organization"
    ],
    "contexts": [
      "office"
    ],
    "frequency": 1,
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
      "office"
    ],
    "frequency": 3,
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
    "frequency": 1,
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
    "frequency": 1,
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
      "school"
    ],
    "frequency": 3,
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
    "frequency": 3,
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
    "frequency": 7,
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
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 31,
    "emoji": "🧰",
    "title": "Réparer un petit souci",
    "needs": [
      "equipment",
      "safety"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 0.5,
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
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 33,
    "emoji": "🗂️",
    "title": "Trier ses documents",
    "needs": [
      "organization",
      "privacy"
    ],
    "contexts": [],
    "frequency": 0.5,
    "target": "individual"
  },
  {
    "id": 34,
    "emoji": "📌",
    "title": "Noter ses rappels",
    "needs": [
      "organization",
      "communication"
    ],
    "contexts": [
      "office"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 35,
    "emoji": "💗",
    "title": "Partager une envie",
    "needs": [
      "expression",
      "joy"
    ],
    "contexts": [
      "social",
      "family"
    ],
    "frequency": 7,
    "target": "group"
  },
  {
    "id": 36,
    "emoji": "💶",
    "title": "Vérifier ses dépenses",
    "needs": [
      "organization",
      "safety"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 0.5,
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
    "frequency": 0.5,
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
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 39,
    "emoji": "🌦️",
    "title": "Partager son humeur",
    "needs": [
      "expression",
      "communication"
    ],
    "contexts": [
      "family"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 40,
    "emoji": "👌",
    "title": "Avoir un élan bienveillant",
    "needs": [
      "cooperation",
      "joy"
    ],
    "contexts": [
      "family",
      "social"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 41,
    "emoji": "🗣️",
    "title": "Partager une astuce productive",
    "needs": [
      "communication",
      "entertainment"
    ],
    "contexts": [
      "office",
      "school",
      "social"
    ],
    "frequency": 3,
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
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 43,
    "emoji": "🤝",
    "title": "Manger avec sa famille",
    "needs": [
      "joy",
      "inclusion"
    ],
    "contexts": [
      "social"
    ],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 44,
    "emoji": "🧡",
    "title": "Remonter le moral à un ami",
    "needs": [
      "communication",
      "inclusion"
    ],
    "contexts": [
      "school"
    ],
    "frequency": 3,
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
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 46,
    "emoji": "🤗",
    "title": "Faire un câlin",
    "needs": [
      "comfort",
      "inclusion"
    ],
    "contexts": [
      "family"
    ],
    "frequency": 7,
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
    "frequency": 3,
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
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 49,
    "emoji": "👏",
    "title": "Encourager quelqu’un",
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
    "frequency": 7,
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
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 51,
    "emoji": "🎁",
    "title": "Offrir un petit cadeau",
    "needs": [
      "cooperation",
      "expression"
    ],
    "contexts": [
      "home",
      "office",
      "school"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 52,
    "emoji": "🧶",
    "title": "Inclure une personne isolée",
    "needs": [
      "inclusion",
      "cooperation"
    ],
    "contexts": [
      "school",
      "social"
    ],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 53,
    "emoji": "💡",
    "title": "Proposer son aide",
    "needs": [
      "cooperation",
      "participation"
    ],
    "contexts": [
      "school",
      "office",
      "social"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 54,
    "emoji": "💆‍♀️",
    "title": "Offrir un massage court",
    "needs": [
      "comfort",
      "expression"
    ],
    "contexts": [
      "home",
      "social"
    ],
    "frequency": 1,
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
    "frequency": 7,
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
    "frequency": 7,
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
    "frequency": 7,
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
    "frequency": 0.5,
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
    "frequency": 7,
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
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 61,
    "emoji": "🕯️",
    "title": "Créer une ambiance douce",
    "needs": [
      "nature",
      "slowness"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 1,
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
    "frequency": 1,
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
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 64,
    "emoji": "🧘",
    "title": "S’asseoir 2 min en silence",
    "needs": [
      "calm",
      "slowness"
    ],
    "contexts": [
      "home",
      "school"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 65,
    "emoji": "👀",
    "title": "Admirer le paysage 30 sec",
    "needs": [
      "nature",
      "rest"
    ],
    "contexts": [
      "outdoor"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 66,
    "emoji": "🌿",
    "title": "Prendre l’air 5 min",
    "needs": [
      "nature",
      "movement"
    ],
    "contexts": [
      "office",
      "outdoor"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 67,
    "emoji": "🌳",
    "title": "Se balader dans la nature",
    "needs": [
      "nature",
      "rest"
    ],
    "contexts": [
      "social",
      "outdoor"
    ],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 68,
    "emoji": "🕊️",
    "title": "Apaiser l’ambiance du groupe",
    "needs": [
      "calm",
      "participation"
    ],
    "contexts": [
      "school",
      "office",
      "social"
    ],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 69,
    "emoji": "🫂",
    "title": "Veiller au besoin du groupe",
    "needs": [
      "inclusion",
      "cooperation"
    ],
    "contexts": [
      "school",
      "office",
      "social"
    ],
    "frequency": 1,
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
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 71,
    "emoji": "💪",
    "title": "Faire 30 min d’exercice",
    "needs": [
      "movement",
      "comfort"
    ],
    "contexts": [
      "outdoor"
    ],
    "frequency": 3,
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
    "frequency": 3,
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
    "frequency": 1,
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
    "frequency": 3,
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
    "frequency": 3,
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
    "frequency": 7,
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
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 78,
    "emoji": "🎲",
    "title": "Lancer un jeu collectif",
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
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 79,
    "emoji": "🧩",
    "title": "Résoudre une énigme",
    "needs": [
      "meaning",
      "entertainment"
    ],
    "contexts": [],
    "frequency": 3,
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
    "frequency": 0.5,
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
    "frequency": 7,
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
    "frequency": 1,
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
    "frequency": 7,
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
    "frequency": 3,
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
    "frequency": 0.5,
    "target": "individual"
  },
  {
    "id": 86,
    "emoji": "🕺",
    "title": "Danser 30 secondes",
    "needs": [
      "movement",
      "joy"
    ],
    "contexts": [
      "home",
      "social",
      "outdoor"
    ],
    "frequency": 7,
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
    "frequency": 3,
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
    "frequency": 3,
    "target": "group"
  },
  {
    "id": 89,
    "emoji": "🌸",
    "title": "Sentir un parfum agréable",
    "needs": [
      "calm",
      "meaning"
    ],
    "contexts": [
      "home",
      "outdoor"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 90,
    "emoji": "🍳",
    "title": "Préparer un repas sain",
    "needs": [
      "nutrition",
      "safety"
    ],
    "contexts": [
      "home",
      "family"
    ],
    "frequency": 1,
    "target": "individual"
  }
];

const HABIT_LINKS = [
  { "id": 1, "related": [22, 23, 35] },
  { "id": 2, "related": [3, 5, 10] },
  { "id": 3, "related": [5, 6, 14] },
  { "id": 4, "related": [8, 9, 1] },
  { "id": 5, "related": [6, 7, 15] },
  { "id": 6, "related": [7, 43, 16] },
  { "id": 7, "related": [43, 90, 17] },
  { "id": 8, "related": [9, 11, 22] },
  { "id": 9, "related": [11, 12, 23] },
  { "id": 10, "related": [14, 15, 4] },
  { "id": 11, "related": [12, 13, 8] },
  { "id": 12, "related": [13, 4, 9] },
  { "id": 13, "related": [4, 8, 11] },
  { "id": 14, "related": [15, 16, 2] },
  { "id": 15, "related": [16, 17, 3] },
  { "id": 16, "related": [17, 18, 5] },
  { "id": 17, "related": [18, 19, 6] },
  { "id": 18, "related": [19, 20, 10] },
  { "id": 19, "related": [20, 21, 14] },
  { "id": 20, "related": [21, 26, 19] },
  { "id": 21, "related": [26, 27, 31] },
  { "id": 22, "related": [23, 24, 36] },
  { "id": 23, "related": [24, 25, 1] },
  { "id": 24, "related": [25, 29, 4] },
  { "id": 25, "related": [29, 32, 8] },
  { "id": 26, "related": [27, 28, 37] },
  { "id": 27, "related": [28, 31, 38] },
  { "id": 28, "related": [31, 37, 85] },
  { "id": 29, "related": [32, 33, 65] },
  { "id": 30, "related": [65, 66, 70] },
  { "id": 31, "related": [37, 38, 20] },
  { "id": 32, "related": [33, 34, 24] },
  { "id": 33, "related": [34, 36, 25] },
  { "id": 34, "related": [36, 1, 29] },
  { "id": 35, "related": [39, 40, 2] },
  { "id": 36, "related": [1, 22, 32] },
  { "id": 37, "related": [38, 85, 21] },
  { "id": 38, "related": [85, 10, 27] },
  { "id": 39, "related": [40, 41, 42] },
  { "id": 40, "related": [41, 42, 44] },
  { "id": 41, "related": [44, 45, 76] },
  { "id": 42, "related": [44, 45, 3] },
  { "id": 43, "related": [90, 2, 6] },
  { "id": 44, "related": [45, 46, 79] },
  { "id": 45, "related": [46, 47, 77] },
  { "id": 46, "related": [47, 48, 39] },
  { "id": 47, "related": [48, 49, 40] },
  { "id": 48, "related": [49, 50, 41] },
  { "id": 49, "related": [50, 51, 52] },
  { "id": 50, "related": [51, 52, 53] },
  { "id": 51, "related": [52, 53, 68] },
  { "id": 52, "related": [53, 54, 69] },
  { "id": 53, "related": [54, 55, 73] },
  { "id": 54, "related": [55, 35, 78] },
  { "id": 55, "related": [35, 39, 88] },
  { "id": 56, "related": [57, 68, 80] },
  { "id": 57, "related": [68, 69, 81] },
  { "id": 58, "related": [59, 60, 11] },
  { "id": 59, "related": [60, 61, 12] },
  { "id": 60, "related": [61, 62, 13] },
  { "id": 61, "related": [62, 63, 30] },
  { "id": 62, "related": [63, 64, 56] },
  { "id": 63, "related": [64, 4, 57] },
  { "id": 64, "related": [4, 8, 58] },
  { "id": 65, "related": [66, 67, 70] },
  { "id": 66, "related": [67, 70, 71] },
  { "id": 67, "related": [70, 71, 72] },
  { "id": 68, "related": [69, 73, 52] },
  { "id": 69, "related": [73, 78, 53] },
  { "id": 70, "related": [71, 72, 72] },
  { "id": 71, "related": [72, 83, 74] },
  { "id": 72, "related": [83, 86, 83] },
  { "id": 73, "related": [78, 82, 54] },
  { "id": 74, "related": [83, 86, 61] },
  { "id": 75, "related": [89, 58, 62] },
  { "id": 76, "related": [77, 79, 87] },
  { "id": 77, "related": [79, 80, 76] },
  { "id": 78, "related": [82, 88, 79] },
  { "id": 79, "related": [80, 81, 80] },
  { "id": 80, "related": [81, 84, 81] },
  { "id": 81, "related": [84, 87, 84] },
  { "id": 82, "related": [88, 35, 65] },
  { "id": 83, "related": [86, 30, 66] },
  { "id": 84, "related": [87, 76, 67] },
  { "id": 85, "related": [10, 14, 37] },
  { "id": 86, "related": [30, 65, 71] },
  { "id": 87, "related": [76, 77, 75] },
  { "id": 88, "related": [39, 40, 87] },
  { "id": 89, "related": [75, 58, 59] },
  { "id": 90, "related": [2, 3, 7] }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = LIBRARY_JSON_DATA;
  module.exports.default = LIBRARY_JSON_DATA;
}
if (typeof window !== "undefined") {
  window.LIBRARY_JSON_DATA = LIBRARY_JSON_DATA;
}
