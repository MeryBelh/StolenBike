import { applyPolicy } from '../../../utils/utils';

const decomptesMapper = applyPolicy([
  { name: 'categorie', label: 'Catégorie', rules: [{ required: true }] },
  { name: 'numContrat', label: 'N° Contrat', rules: [{ required: true }] },
  { name: 'dateDecompte', label: 'Date Décompte', rules: [{ required: true }] },
]);

export { decomptesMapper };
