import { applyPolicy } from '../../../utils/utils';
import React from 'react';

const codesWafaMapper = applyPolicy([
  { name: 'categorie', label: 'Catégorie', rules: [{ required: true }] },
  { name: 'numContrat', label: 'N° Contrat', rules: [{ required: true }] },
]);

export { codesWafaMapper };
