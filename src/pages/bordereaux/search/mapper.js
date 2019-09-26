import { Link } from 'react-router-dom';
import React from 'react';
import { applyPolicy } from '../../../utils/utils';
import { Input } from 'antd';
import SearchBox from '@/components/custom/common/SearchBox';

const bordereauMapper = applyPolicy([
  {
    label: 'Identifiant',
    name: 'id',
    render: numeroBordereau => {
      return <Link to={`/sinistre/bordereaux/${numeroBordereau}`}> {numeroBordereau} </Link>;
    },
  },
  { label: 'Réf. intérmidiaire', name: 'referenceExterne', key: 'referenceExterne' },
  { label: 'Date cachet', name: 'datecachet', key: 'datecachet' },
  { label: 'Catégorie', name: 'categorie', key: 'categorie' },
  { label: 'Police', name: 'numeroContrat', key: 'numeroContrat' },
  { label: 'Souscripteur', name: 'nomClient', key: 'nomClient' },
  { label: 'Statut', name: 'statut', key: 'statut' },
  { label: 'Nombre', name: 'nombreDeclarationMaladie', key: 'nombreDeclarationMaladie' },
  {
    label: 'Nb en instance',
    name: 'nombreDeclarationMaladieEnInstance',
    key: 'nombreDeclarationMaladieEnInstance',
  },
]);

const bordereauSearchMapper = [
  { name: 'Identifiant', label: 'id' },
  { name: 'Réf. intermédiaire', label: 'referenceExterne' },
  { name: 'Catégorie', label: 'numeroContrat' },
  { name: 'N° Contrat', label: 'numeroContrat' },
  { name: 'Date Cachet', label: 'dateCachet' },
];

export { bordereauMapper, bordereauSearchMapper };
