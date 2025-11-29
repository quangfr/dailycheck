const NAMES_LIBRARY_DATA = {
  pseudoNouns: [
    "abricot", "acacia", "agave", "ail", "amande", "ananas", "anis", "asperge", "aubepine",
    "aubergine", "avocat", "baie", "bambou", "banane", "bardane", "basilic", "begonia",
    "bergamote", "bette", "bleuet", "brocoli", "bruyere", "cactus", "cajou", "camelia",
    "camomille", "capucine", "carotte", "cassis", "cerfeuil", "cerise", "chardon", "chili",
    "chou", "citron", "clementine", "colza", "curcuma", "dahlia", "datte", "digitale",
    "epinard", "erable", "estragon", "eucalyptus", "fenouil", "figue", "fraise", "framboise",
    "frene", "girofle", "ginseng", "goyave", "grenade", "groseille", "hibiscus", "hortensia",
    "houblon", "igname", "iris", "jacinthe", "jasmin", "kaki", "kale", "kiwi", "kumquat",
    "lavande", "lentille", "lierre", "lime", "lin", "lis", "litchi", "lotus", "mandarine",
    "mangue", "marjolaine", "marron", "melon", "menthe", "mimosa", "mirabelle", "morille",
    "myrtille", "navet", "nectarine", "noix", "nénuphar", "olive", "onagre", "orange",
    "origan", "ortie", "oseille", "panais", "papaye", "paprika", "pastèque", "persil",
    "pignon", "piment", "pin", "pivoine", "platane", "poire", "pois", "poivron", "pomelo",
    "pomme", "prune", "pêche", "radis", "raisin", "rhubarbe", "riz", "romarin", "roquette",
    "rose", "safran", "salade", "sapin", "sarriette", "seigle", "sureau", "tamarin", "tangerine",
    "taro", "tomate", "tournesol", "trefle", "tulipe", "vanille", "vigne", "violette", "wasabi",
    "yam", "yuzu"
  ],
  pseudoAdjectives: [
    "actif", "agile", "alerte", "ambre", "ardent", "assidu", "attentif", "bleu",
    "boise", "brave", "bref", "brillant", "calin", "calme", "carmin", "chic",
    "clair", "clean", "compact", "courage", "creatif", "curieux", "digne", "discret",
    "doux", "droit", "eclatant", "epais", "epure", "ferme", "feutre", "fiable",
    "fidele", "fier", "fin", "floral", "fluide", "fort", "frais", "franc", "gai",
    "glace", "gris", "honnete", "humble", "indigo", "jaune", "joyeux", "juste",
    "leger", "libre", "lointain", "loyal", "lucide", "lumineux", "marine", "mobile",
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
