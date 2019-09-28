import { applyPolicy } from '../../../utils/utils';

const stolenBikeCasesMapper = applyPolicy([
  {
    label: 'model',
    name: 'model',
    // sorter: (a, b) => a.categorie - b.categorie,
  },
  {
    label: 'color',
    name: 'color',
  }
  
]);

const stolenBikeCasesSearchMapper = applyPolicy([
  { label: 'model', name: 'model', rules: [{ required: true }] },
  { label: 'color', name: 'color', rules: [{ required: true }] },
]);
export { stolenBikeCasesMapper, stolenBikeCasesSearchMapper };
