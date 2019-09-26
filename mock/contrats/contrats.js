import mockjs from 'mockjs';

const prestations = mockjs.mock({
  'content|100': [
    {
      categorie: 60,
      'code|1-100': 0,
      dateDebut: '03/07/2019',
      intitule: 'Intitule',
      numeroContrat: 363400,
      'plafond|100-500': 0,
      taux: '30%',
      'valeurD|1000-10000': 1000,
    },
  ],
});

const clauses = mockjs.mock({
  'content|100': [
    {
      categorie: 60,
      'code|10-20': 0,
      libelle: 'libelle',
      numeroContrat: 363400,
      dateEffet: '16/07/2019',
    },
  ],
});

const primes = mockjs.mock({
  'content|50': [
    {
      categorie: 60,
      codeIntermediaire: 'codeIntermediaire',
      dateDebut: '01/01/2000',
      dateEmission: '01/01/2001',
      dateFin: '01/01/2020',
      exercice: 2019,
      nomClient: 'cosumar',
      numeroClient: 'client1',
      numeroContrat: 363400,
      'numeroPrime|1-100': 0,
      'primeNette|1000-10000': 0,
      'primeTtc|1000-10000': 0,
      statut: 'payé',
      trimestre: 2,
    },
  ],
});

const contrats = {
  content: [
    {
      codeIntermediaire: '9106',
      nomCategorie: 'Accidents Corporels',
      categorie: 60,
      numeroContrat: 363400,
      numeroClient: '1793',
      nomClient: 'COSUMAR',
      adresse: '8, RUE MOUATAMID BEN ABBAD CASABLANCA',
      nomIntermediaire: 'AGMA',
      dateDebut: '01/01/2010',
    },
  ],
  page: 0,
  size: 10,
  totalPages: 1,
  totalElements: 1,
};

export default {
  'POST /mock/contrats/': contrats,
};
