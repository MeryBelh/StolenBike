const historiques = {
  content: [
    {
      codeIntermediaire: '9106',
      statut: 'Garantie en cours',
      categorie: 60,
      numeroContrat: 363400,
      numeroAdherent: 2180462,
      numeroMatricule: 3468,
      nomAdherent: null,
      dateAdhesion: '01/01/2010',
      dateEtat: null,
      numeroClient: '1793',
      nomClient: 'COSUMAR',
    },
    {
      codeIntermediaire: '9106',
      statut: 'Garantie en cours',
      categorie: 61,
      numeroContrat: 371700,
      numeroAdherent: 2180462,
      numeroMatricule: 3468,
      nomAdherent: null,
      dateAdhesion: '01/01/2010',
      dateEtat: null,
      numeroClient: '1793',
      nomClient: 'COSUMAR',
    },
  ],
  page: 0,
  size: 10,
  totalPages: 1,
  totalElements: 2,
};

export default {
  'GET /mock/adherents/2180462/historiques': historiques,
};
