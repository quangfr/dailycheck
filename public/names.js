const NAMES_LIBRARY_DATA = {
  pseudoNouns: [
    "abricot", "acacia", "agave", "ail", "amande", "ananas", "anis", "asperge", "aubépine",
    "aubergine", "avocat", "baie", "bambou", "banane", "bardane", "basilic", "bégonia",
    "bergamote", "bette", "bleuet", "brocoli", "bruyère", "cactus", "cajou", "camélia",
    "camomille", "capucine", "carotte", "cassis", "cerfeuil", "cerise", "chardon", "chili",
    "chou", "citron", "clementine", "colza", "curcuma", "dahlia", "datte", "digitale",
    "épinard", "érable", "estragon", "eucalyptus", "fenouil", "figue", "fraise", "framboise",
    "frêne", "girofle", "ginseng", "goyave", "grenade", "groseille", "hibiscus", "hortensia",
    "houblon", "igname", "iris", "jacinthe", "jasmin", "kaki", "kale", "kiwi", "kumquat",
    "lavande", "lentille", "lierre", "lime", "lin", "lis", "litchi", "lotus", "mandarine",
    "mangue", "marjolaine", "marron", "melon", "menthe", "mimosa", "mirabelle", "morille",
    "myrtille", "navet", "nectarine", "noix", "nénuphar", "olive", "onagre", "orange",
    "origan", "ortie", "oseille", "panais", "papaye", "paprika", "pastèque", "persil",
    "pignon", "piment", "pin", "pivoine", "platane", "poire", "pois", "poivron", "pomelo",
    "pomme", "prune", "pêche", "radis", "raisin", "rhubarbe", "riz", "romarin", "roquette",
    "rose", "safran", "salade", "sapin", "sarriette", "seigle", "sureau", "tamarin", "tangerine",
    "taro", "tomate", "tournesol", "trèfle", "tulipe", "vanille", "vigne", "violette", "wasabi",
    "yam", "yuzu"
  ],
  pseudoAdjectives: [
    "actif", "agile", "alerte", "ambre", "ardent", "assidu", "attentif", "bleu",
    "boisé", "brave", "bref", "brillant", "câlin", "calme", "carmin", "chic",
    "clair", "clean", "compact", "courage", "créatif", "curieux", "digne", "discret",
    "doux", "droit", "éclatant", "épais", "épuré", "ferme", "feutre", "fiable",
    "fidèle", "fier", "fin", "floral", "fluide", "fort", "frais", "franc", "gai",
    "glace", "gris", "honnête", "humble", "indigo", "jaune", "joyeux", "juste",
    "léger", "libre", "lointain", "loyal", "lucide", "lumineux", "marine", "mobile",
    "modeste", "motif", "mou", "naturel", "neige", "net", "neuf", "neutre", "noble",
    "novice", "paisible", "patient", "penseur", "piste", "plaisant", "plein", "poli",
    "poussif", "prudent", "pudique", "puissant", "pur", "rapide", "ravi", "rond",
    "rose", "rouge", "rubis", "sage", "sain", "saumon", "serein", "simple", "sobre",
    "solaire", "solide", "souple", "stable", "subtil", "tactile", "tendre", "uni",
    "utile", "vert", "vif", "violet", "vital", "vivant", "vrai", "zen"
  ]

};
if (typeof module !== "undefined" && module.exports) {
  module.exports = NAMES_LIBRARY_DATA;
  module.exports.default = NAMES_LIBRARY_DATA;
}
if (typeof window !== "undefined") {
  window.NAMES_LIBRARY_DATA = NAMES_LIBRARY_DATA;
}
