import { applyPolicy } from '../../../utils/utils';

const reglementBloqueMapper = applyPolicy([
  {
    label: 'Catégorie',
    name: 'categorie',
    // sorter: (a, b) => a.categorie - b.categorie,
  },
  {
    label: 'Police',
    name: 'numeroContrat',
  },
  {
    label: 'Client',
    name: 'nomClient',
  },
  {
    label: 'Date',
    name: 'dateSaisie',
  },
  {
    label: 'Montant',
    name: 'montant',
  },
]);

const reglementBloqueSearchMapper = applyPolicy([
  { label: 'Catégorie', name: 'categorie', rules: [{ required: true }] },
  { label: 'N° Contrat', name: 'numeroContrat', rules: [{ required: true }] },
]);
export { reglementBloqueMapper, reglementBloqueSearchMapper };
