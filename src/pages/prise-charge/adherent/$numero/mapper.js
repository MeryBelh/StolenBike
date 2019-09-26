import { applyPolicy } from '../../../../utils/utils';

export const beneficiaireMapper =
  // applyPolicy(
  [
    { label: 'N° Rang', name: 'numeroBeneficiaire' },
    { label: 'Nom/prénom', name: 'nomBeneficiaire' },
    { label: 'Type', name: 'type', key: 'type' },
    { label: 'Date Naissance', name: 'dateNaissance' },
    { label: 'Sexe', name: 'sexe', key: 'sexe' },
    { label: "Date d'adhésion", name: 'dateAdhesion' },
  ];
//  );

export const adherentHistoriqueMapper = applyPolicy([
  { label: 'Catégorie', name: 'categorie' },
  { label: 'Police', name: 'numeroContrat' },
  { label: 'N° matricule', name: 'numeroMatricule' },
  { label: "Date d'adhésion", name: 'dateAdhesion' },
  { label: 'N° client', name: 'numeroClient' },
  { label: 'Client', name: 'nomClient' },
  { label: 'Etat', name: 'statut' },
  { label: 'Date Etat', name: 'dateEtat' },
]);
