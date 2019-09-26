import { applyPolicy } from '../../../utils/utils';

export const avenantMapper = applyPolicy([
  { label: "Date d'effet", name: 'dateDebut' },
  { label: "Rachat d'antériorité", name: 'rachatAnteriorite' },
  { label: "Age limite de l'assuré", name: 'ageLimite' },
  { label: "Age limite de l'enfant", name: 'ageLimiteEnfant' },
  { label: 'Extension retraite', name: 'ageRetraite' },
  { label: 'Type de plafond', name: 'typePlafond' },
  { label: 'Montant plafond', name: 'plafond' },
]);

export const prestationMapper = applyPolicy([
  { label: 'Code', name: 'code' },
  { label: 'Intitulé', name: 'intitule' },
  { label: 'Date Début', name: 'dateDebut' },
  { label: 'Plafond', name: 'plafond' },
  { label: 'Taux', name: 'taux' },
  { label: 'Valeur D', name: 'valeurD' },
]);

export const clauseMapper = applyPolicy([
  { label: 'Code', name: 'code' },
  { label: " Date d'effet", name: 'dateEffet' },
  { label: 'Intitulé', name: 'libelle' },
]);

export const primeMapper = applyPolicy([
  { label: 'N° prime', name: 'numeroPrime' },
  { label: 'Souscripteur', name: 'nomClient' },
  { label: 'Date début', name: 'dateDebut' },
  { label: 'Date fin ', name: 'dateFin' },
  { label: "Date d'émission ", name: 'dateEmission' },
  { label: 'Montant', name: 'primeNette' },
  {
    label: 'Statut',
    name: 'statut',
    filters: [{ text: 'REGLEE', value: 'REGLEE' }, { text: 'IMPAYEE', value: 'IMPAYEE' }],
    onFilter: (value, record) => record.statut.indexOf(value) === 0,
  },
]);
