import mockjs from 'mockjs';

const chequesBloques = {
  "content": [
    {
      "categorie": 60,
      "numeroContrat": 206600,
      "nomClient": "S.D.L. INFORMATIQUE",
      "dateSaisie": "28/09/2005",
      "montant": 298.72
    },
    {
      "categorie": 60,
      "numeroContrat": 206600,
      "nomClient": "S.D.L. INFORMATIQUE",
      "dateSaisie": "30/05/2005",
      "montant": 541.64
    },
    {
      "categorie": 60,
      "numeroContrat": 206600,
      "nomClient": "S.D.L. INFORMATIQUE",
      "dateSaisie": "01/06/2005",
      "montant": 278.88
    },
    {
      "categorie": 60,
      "numeroContrat": 206600,
      "nomClient": "S.D.L. INFORMATIQUE",
      "dateSaisie": "14/11/2005",
      "montant": 5819.00
    },
    {
      "categorie": 60,
      "numeroContrat": 206600,
      "nomClient": "S.D.L. INFORMATIQUE",
      "dateSaisie": "12/09/2005",
      "montant": 1153.65
    },
    {
      "categorie": 60,
      "numeroContrat": 206600,
      "nomClient": "S.D.L. INFORMATIQUE",
      "dateSaisie": "15/08/2005",
      "montant": 1186.80
    }
  ],
  "page": 0,
  "size": 10,
  "totalPages": 1,
  "totalElements": 6
}

export default {
  'POST /mock/chequesBloques': chequesBloques,
};
