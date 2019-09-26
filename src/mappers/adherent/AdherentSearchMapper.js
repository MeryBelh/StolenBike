import { applyPolicy } from '../../utils/utils';

// const AdherentSearchMapper = applyPolicy([
//   { label: 'Catégorie', name: 'categorie' },
//   { label: 'N° Contrat', name: 'numeroContrat' },
//   { label: 'N° Assuré', name: 'numeroAdherent' },
//   { label: 'Matricule', name: 'matricule' },
//   { label: 'Nom Assuré', name: 'nomAdherent', deniedFor: ['ROLE_SANTE_PRESTATAIRE'] },
// ]);
//
const AdherentSearchMapper = [
  { label: 'Catégorie', name: 'categorie' },
  { label: 'N° Contrat', name: 'numeroContrat' },
  { label: 'N° Assuré', name: 'numeroAdherent' },
  { label: 'Matricule', name: 'matricule' },
  { label: 'Nom Assuré', name: 'nomAdherent', deniedFor: ['ROLE_SANTE_PRESTATAIRE'] },
];

export default AdherentSearchMapper;
