import { Link } from 'react-router-dom';
import React from 'react';
import { applyPolicy } from '../utils/utils';

const contratMapper = [
  {
    label: 'Numero Contrat',
    name: 'numeroContrat',
    // render: (numeroContrat, obj) => {
    //   const numero = `${obj.categorie},${numeroContrat}`;
    //   return (
    //     <Link to={'/production/contrats/' + numero}>{obj.categorie + '/' + numeroContrat} </Link>
    //   );
    // },
  },
  { label: 'Produit', name: 'nomCategorie' },
  { label: 'Catégorie', name: 'categorie' },
  { label: 'Police', name: 'numeroContrat' },
  { label: 'Effet', name: 'dateDebut' },
  { label: 'Soucripteur', name: 'nomClient' },
  { label: 'Adresse', name: 'adresse' },
];

const contratSearchMapper = [
  { label: 'Catégorie', name: 'categorie', rules: [{ required: true }] },
  { label: 'Num Contrat', name: 'numeroContrat' },
  { label: 'Nom Client', name: 'nomClient' },
];

export { contratMapper, contratSearchMapper };
