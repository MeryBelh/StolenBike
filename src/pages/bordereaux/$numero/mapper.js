import { applyPolicy } from '../../../utils/utils';

const declarationMapper = applyPolicy([
  { label: 'Déclaration', name: 'id' },
  { label: 'Bord.', name: 'numeroBordereau' },
  { label: 'Statut', name: 'statut' },
  { label: 'Nature', name: 'nature' },
  { label: 'Type', name: 'type' },
  { label: 'DT. sinistre', name: 'dateConsultation' },
  { label: 'DT. Cachet', name: 'dateReception' },
  { label: 'N° Assuré', name: 'numeroAdherent' },
  { label: 'Assuré', name: 'nomAdherent' },
  { label: 'Malade', name: 'malade' },
  { label: 'Frais', name: 'frais' },
  { label: 'Décompte', name: 'decompte' },
  { label: 'DT. reglt', name: 'dateTraitement' },
  { label: 'Chéque', name: 'numeroCheque' },
  { label: 'RIB', name: 'rib' },
  { label: 'Utilisateur', name: 'codeUtilisateur' },
  { label: 'Observation', name: 'observation' },
]);

export default declarationMapper;
