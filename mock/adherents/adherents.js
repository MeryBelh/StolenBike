import mockjs from 'mockjs';


const adherents = {
  content: [
    {
    codeIntermediaire: '9106',
    categorie: 60,
    numeroContrat: 363400,
    numeroAdherent: 2180462,
    numeroMatricule: 3468,
    nomAdherent: 'BAKAR MUSTAPHA',
    dateAdhesion: '01/01/2010',
    dateEmbauche: '18/02/1981',
    dateNaissance: '01/07/1959',
    sexe: 'M',
    situationFamiliale: 'Marié',
    rib: '230780894149421100120033',
    ribInstance: '230780894149421100120033',
    regime: '',
    cleActivation: 'E1H6E-6H@GU',
    grade: 'Employe',
    etatAdherent: 'En cours',
    email: 'emaiil@domain.com',
    telephone: 'xxxxxxxx',
    cin: 'XX999999',
  }],
  page: 0,
  size: 10,
  totalPages: 1,
  totalElements: 1,
};

const historiques = mockjs.mock({
  'content|100': [
    {
      'categorie|1-100': 0,
      codeIntermediaire: 'codeIntermediaire',
      dateAdhesion: '04/07/2018',
      dateEtat: '04/07/2019',
      nomAdherent: 'john doe',
      nomClient: 'john junior',
      'numeroAdherent|1-100': 0,
      numeroClient: 'numeroClient',
      'numeroContrat|1-100': 0,
      'numeroMatricule|1-100': 0,
      statut: 'string',
    },
  ],
});

const adherent = {
  codeIntermediaire: '9106',
  categorie: 60,
  numeroContrat: 363400,
  numeroAdherent: 2180462,
  numeroMatricule: 3468,
  nomAdherent: 'BAKAR MUSTAPHA',
  dateAdhesion: '01/01/2010',
  dateEmbauche: '18/02/1981',
  dateNaissance: '01/07/1959',
  sexe: 'M',
  situationFamiliale: 'Marié',
  rib: '230780894149421100120033',
  ribInstance: '230780894149421100120033',
  regime: '',
  cleActivation: 'E1H6E-6H@GU',
  grade: 'Employe',
  etatAdherent: 'En cours',
  email: 'emaiil@domain.com',
  telephone: 'xxxxxxxx',
  cin: 'XX999999',
}


export default {
  'POST /mock/adherents/': adherents,
  'GET /mock/adherents/2180462': adherent,
};
