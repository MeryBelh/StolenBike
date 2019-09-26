import { applyPolicy } from '../../../utils/utils';

export const acteMedicaleMapper = applyPolicy([
  { label: 'Acte', name: 'nomPrestation' },
  { label: 'Taux. remb', name: 'tauxRembourssement' },
  { label: 'Frais eng', name: 'fraisEngage' },
  { label: 'Base. remb', name: 'baseRembourssement' },
  { label: 'Non. remb', name: 'montantNonRembourse' },
  { label: 'Déja. remb', name: 'montantDejaRembourse' },
  { label: 'Nombre D', name: 'nombreD' },
  { label: 'Décompte', name: 'decompte' },
]);

export const correspondanceMapper = applyPolicy([
  { label: 'Type', name: 'typeCorrespondance' },
  { label: 'Date Correspondance', name: 'dateCorrespondance' },
  { label: 'Medecin', name: 'medecin' },
  { label: 'Date PV', name: 'datePvMedecin' },
  { label: 'Motif', name: 'motif' },
]);
