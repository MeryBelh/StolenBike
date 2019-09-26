import mockjs from 'mockjs';

const declarations = mockjs.mock({
  'content|100': [
    {
      'categorie|1-5': 0,
      codeIntermediaire: 'codeIntermediaire',
      codeUtilisateur: 'codeUtilisateur',
      dateConsultation: '05/07/2019',
      dateReception: '05/07/2019',
      dateTraitement: '05/07/2019',
      'decompte|1000-10000': 0,
      'frais|1000-10000': 0,
      'id|1-100': 0,
      malade: 'malade',
      nature: 'nature',
      nomAdherent: 'john doe',
      nomClient: 'john junior',
      'numeroAdherent|1-50': 0,
      'numeroBeneficiaire|50-100': 0,
      'numeroBordereau|1-10': 0,
      'numeroCheque|100-200': 0,
      'numeroClient|1-100': 0,
      'numeroContrat|60-70': 0,
      observation: 'ras',
      rib: '123456789XXXXX',
      statut: 'progress',
      type: 'type1',
    },
  ],
});


const bordereaux = mockjs.mock({
  'content|100': [
    {
      'categorie|1-10': 0,
      codeIntermediaire: 'codeIntermediaire',
      datecachet: '05/06/2019',
      'id|1-100': 0,
      nomClient: 'john doe',
      'nombreDeclarationMaladie|3-20': 0,
      'nombreDeclarationMaladieEnInstance|3-20': 0,
      'numeroClient|1-10': 0,
      'numeroContrat|1-10': 0,
      referenceExterne: 'ref',
      statut: 'progress',
    },
  ],
});


export default {
  'GET /mock/bordereaux/1234/declarations': declarations,
  'POST /mock/bordereaux': bordereaux,
};
