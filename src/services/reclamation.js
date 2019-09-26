import request from '@/utils/request';

export function searchReclamation(queryCommand) {
  return request()('/reclamations', {
    method: 'POST',
    body: JSON.stringify(queryCommand),
    headers: { 'Content-Type': 'Application/json' },
  });
}

export function saveReclamation(reclamation) {
  return request()(`/declarationMaladies/${reclamation.numeroDeclaraion}/reclamer`, {
    method: 'POST',
    body: JSON.stringify(reclamation),
    headers: { 'Content-Type': 'Application/json' },
  });
}
