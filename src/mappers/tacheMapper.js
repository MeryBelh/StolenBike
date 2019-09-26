import { applyPolicy } from '../utils/utils';

const tacheMapper = applyPolicy([
  { label: 'numéro Demande', name: 'numeroDemande', },
  { label: 'Description', name: 'nomTache' },
  { label: 'Date Demande', name: 'dateTraitement' },
  { label: 'Type Demandeur', name: 'typeDemandeur' },
  { label: 'Nom Demandeur', name: 'nomDemandeur' },
  { label: 'Raison social', name: 'nomClient', deniedFor: ['ROLE_SANTE_CLIENT'] },
  { label: 'Nom Assuré', name: 'nomAdherent' },
  { label: 'Nom Bénéficiaire', name: 'nomBeneficiaire' },
]);

export default tacheMapper;
