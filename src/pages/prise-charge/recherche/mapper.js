import React from 'react';
import { Link } from 'react-router-dom';
import getTypePrestataire from '@/utils/typePrestataire';
import { getAuthority as authorities } from '@/utils/authority';

export const pecSearchMapper = [
  { label: 'Référence demande', name: 'numeroDeclaration' },
  { label: 'N° affiliation ou matricule', name: 'numeroAdherent' },
  { label: 'Période entre', name: 'periode', type: 'dateRange' },
  { label: 'N° Police', name: 'numeroContrat' },
  { label: 'Prénom & Nom bénéficiaire', name: 'nomBeneficiaire' },
  {
    label: 'Statut PEC',
    name: 'statut',
    options: [],
  },
];

export const pecTableMapper = [
  {
    label: 'Référence demande',
    name: 'numeroDeclaration',
    render: numeroDeclaration => {
      return (
        <Link to={`/prise-charge/${getTypePrestataire(authorities())}/${numeroDeclaration}/recap`}>
          {numeroDeclaration}{' '}
        </Link>
      );
    },
  },
  { label: 'Date demande', name: 'dateSaisie' },
  { label: 'Bénéficiaire', name: 'nomBeneficiaire' },
  { label: 'Statut demande', name: 'etatLibelle' },
];
