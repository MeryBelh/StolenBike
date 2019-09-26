import { Link } from 'react-router-dom';
import { applyPolicy } from '../../../utils/utils';
import React from 'react';

const declarationMapper = applyPolicy([
  {
    label: 'N° déclaration',
    name: 'numeroDeclaration',
    render: numeroDeclaration => {
      return <Link to={`/sinistre/declarations/${numeroDeclaration}`}>{numeroDeclaration} </Link>;
    },
  },
  { label: 'N° Assuré', name: 'numeroAdherent' },
  { label: 'Assuré', name: 'nomAdherent' },
  { label: 'Malade', name: 'malade' },
  { label: 'Nature', name: 'nature' },
  { label: 'Type', name: 'type' },
  { label: 'DT. sinistre', name: 'dateConsultation' },
  { label: 'Frais', name: 'frais' },
  { label: 'Décompte', name: 'decompte' },
  { label: 'Statut', name: 'statut' },
]);

const declarationSearchMapper = [
  { label: 'N° Déclaration', name: 'numeroDeclaration' },
  { label: 'N° Assuré', name: 'numeroAdherent' },
  { label: 'Matricule', name: 'matricule' },
  { label: 'Catégorie', name: 'categorie' },
  { label: 'N° Contrat', name: 'numeroContrat' },
  { label: 'Date Cachet', name: 'dateReception', type: 'date' },
  { label: 'Date sinistre', name: 'dateConsultation', type: 'date' },
  { label: 'N° Chéque', name: 'numeroCheque', secondary: true },
  {
    label: 'Statut Déclaration',
    name: 'statut',
    secondary: true,
    options: [
      '',
      'REGLEE',
      'CHIFREE',
      'NON TRAITEE',
      'C. Information Med tr',
      'Accord',
      'Rejet',
      'C. Information Client',
      'Contre Visite',
    ],
  },
  { label: 'N° Bordereau', name: 'numeroBordereau', secondary: true },
];

export { declarationMapper, declarationSearchMapper };
