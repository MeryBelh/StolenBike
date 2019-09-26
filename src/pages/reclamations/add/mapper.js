import { applyPolicy } from '../../../utils/utils';

const reclamationMapper = applyPolicy([
  { label: 'N° Réclamation', name: 'id', key: 'id' },
  { label: 'Catégorie', name: 'categorie', key: 'categorie' },
  { label: 'Police', name: 'numeroContrat', key: 'numeroContrat' },
  { label: 'N° Déclaration', name: 'numeroDeclaraion', key: 'numeroDeclaraion' },
  { label: 'Nom Assuré', name: 'nomAdherent', key: 'nomAdherent' },
  { label: 'Date Saisie', name: 'dateSaisie', key: 'dateSaisie' },
  { label: 'Date Traitement', name: 'dateTraitement', key: 'dateTraitement' },
  { label: 'Commentaire', name: 'commentaire', key: 'commentaire' },
  {
    label: 'Réponse Compagnie',
    name: 'commentaireBackOffice',
    key: 'commentaireBackOffice',
  },
]);

export default reclamationMapper;
