import { applyPolicy } from '../../../utils/utils';
import Field from '../../../utils/Field';
import React from 'react';

const primeMapper = applyPolicy([
  { label: 'N° prime', name: 'numeroPrime', key: 'numeroPrime' },
  { label: 'Catégorie', name: 'categorie', key: 'categorie' },
  { label: 'N° Contrat', name: 'numeroContrat', key: 'numeroContrat' },
  { label: 'Souscripteur', name: 'nomClient', key: 'nomClient' },
  { label: 'Date début', name: 'dateDebut', key: 'dateDebut' },
  { label: 'Date fin ', name: 'dateFin', key: 'dateFin' },
  { label: "Date d'émission ", name: 'dateEmission', key: 'dateEmission' },
  { label: 'Montant', name: 'primeNette', key: 'primeNette' },
  { label: 'Statut', name: 'statut', key: 'statut' },
]);

const primeSearchMapper = applyPolicy([
  new Field({
    name: 'exercice',
    label: 'Exercice',
    rules: [
      { required: true, message: 'veuillez saisir un excercice' },
      {
        validator: (rule, value, callback) => {
          if (value > 1970 || value === '') {
            callback();
            return;
          }
          callback('Entrez un exercice aprés 1970!');
        },
      },
    ],
  }),

  new Field({ name: 'trimestre', label: 'Trimestre' }),
  new Field({
    name: 'statut',
    label: 'Statut',
    options: ['', 'REGLEE', 'IMPAYEE'],
    initialValue: 'REGLEE',
  }),
  new Field({ name: 'categorie', label: 'Catégorie' }),
  new Field({ name: 'numeroContrat', label: 'N° Contrat' }),
]);

export { primeMapper, primeSearchMapper };
