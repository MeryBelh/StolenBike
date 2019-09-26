import { applyPolicy } from '../../utils/utils';

const AdherentMapper =
  applyPolicy(
  [
    { label: 'N° Assuré', name: 'numeroAdherent' },
    { label: 'Matricule', name: 'numeroMatricule', deniedFor: ['ROLE_SANTE_PRESTATAIRE'] },
    { label: 'Nom/prénom', name: 'nomAdherent' },
    { label: 'Sexe', name: 'sexe', deniedFor: ['ROLE_CLIENT'] },
    {
      label: 'Date Adhésion',
      name: 'dateAdhesion',
      type: 'date',
      deniedFor: ['ROLE_SANTE_PRESTATAIRE'],
    },
    { label: 'Date Naissance', name: 'dateNaissance', type: 'date' },
    // TODO: Ask salma about this two below fields
    { label: 'N° CIN', name: 'cin', deniedFor: ['ROLE_CLIENT'] },
    { label: 'Raison Sociale', name: 'nomClient', deniedFor: ['ROLE_CLIENT'] },
    { label: 'Etat', name: 'etatAdherent', deniedFor: ['ROLE_SANTE_PRESTATAIRE'] },
    { label: 'Code Wafa Santé', name: 'cleActivation', deniedFor: ['ROLE_SANTE_PRESTATAIRE'] },
  ]
);

export default AdherentMapper;
