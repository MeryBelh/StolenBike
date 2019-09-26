const  avenants  = [
  {
    "rachatAnteriorite": "Non",
    "ageLimite": 65,
    "ageLimiteEnfant": 21,
    "ageRetraite": null,
    "typePlafond": "Pathologie",
    "plafond": 50000,
    "dateDebut": "01/01/2010",
    "categorie": 60,
    "numeroContrat": 363400
  },
  {
    "rachatAnteriorite": "Non",
    "ageLimite": 65,
    "ageLimiteEnfant": 21,
    "ageRetraite": null,
    "typePlafond": "Pathologie",
    "plafond": 50000,
    "dateDebut": "01/01/2014",
    "categorie": 60,
    "numeroContrat": 363400
  },
  {
    "rachatAnteriorite": "Oui",
    "ageLimite": 65,
    "ageLimiteEnfant": 21,
    "ageRetraite": null,
    "typePlafond": "Pathologie",
    "plafond": 50000,
    "dateDebut": "01/08/2017",
    "categorie": 60,
    "numeroContrat": 363400
  }
]

export default {
  'GET /mock/contrats/60,363400/avenants': avenants,
}
