const beneficiaires = [
  {
    numeroAdherent: 2180462,
    numeroBeneficiaire: 3,
    nomBeneficiaire: 'KHADIJA',
    type: 'Conjoint',
    sexe: 'Féminin',
    dateAdhesion: '01/01/2010',
    dateNaissance: '20/03/1969',
  },
  {
    numeroAdherent: 2180462,
    numeroBeneficiaire: 12,
    nomBeneficiaire: 'ANASS',
    type: 'Enfant',
    sexe: 'Masculin',
    dateAdhesion: '01/01/2010',
    dateNaissance: '22/07/1989',
  },
  {
    numeroAdherent: 2180462,
    numeroBeneficiaire: 13,
    nomBeneficiaire: 'DRISS',
    type: 'Enfant',
    sexe: 'Masculin',
    dateAdhesion: '01/01/2010',
    dateNaissance: '20/08/1992',
  },
  {
    numeroAdherent: 2180462,
    numeroBeneficiaire: 14,
    nomBeneficiaire: 'SOUKAINA',
    type: 'Enfant',
    sexe: 'Féminin',
    dateAdhesion: '01/01/2010',
    dateNaissance: '06/06/1994',
  },
  {
    numeroAdherent: 2180462,
    numeroBeneficiaire: 15,
    nomBeneficiaire: 'HIND',
    type: 'Enfant',
    sexe: 'Féminin',
    dateAdhesion: '01/01/2010',
    dateNaissance: '16/02/1997',
  },
  {
    numeroAdherent: 2180462,
    numeroBeneficiaire: 16,
    nomBeneficiaire: 'NOUHAILA',
    type: 'Enfant',
    sexe: 'Féminin',
    dateAdhesion: '01/01/2010',
    dateNaissance: '09/08/2001',
  },
];

const beneficiaire = {
  numeroAdherent: 2180462,
  numeroBeneficiaire: 3,
  nomBeneficiaire: 'KHADIJA',
  type: 'Conjoint',
  sexe: 'Féminin',
  dateAdhesion: '01/01/2010',
  dateNaissance: '20/03/1969',
}


export default {
  'GET /mock/adherents/2180462/beneficiaires': beneficiaires,
  'GET /mock/adherents/2180462/1': beneficiaire,
}
