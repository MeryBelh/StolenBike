import request from '@/utils/request';

const endPoint = '/declarationMaladies';

export function searchDeclarationMaladie(queryCommand) {
  return request()(endPoint, {
    method: 'POST',
    body: JSON.stringify(queryCommand),
    headers: { 'content-type': 'Application/json' },
  });
}

export function fetchDeclaration(numeroDeclaration, paginationQuery) {
  return request()(`${endPoint}/${numeroDeclaration}${paginationQuery || ''}`);
}
export function fetchPrestations(numeroDeclaration, paginationQuery) {
  return request()(`${endPoint}/${numeroDeclaration}/prestations${paginationQuery || ''}`);
}

export function fetchCorrespondances(numeroDeclaration, paginationQuery) {
  return request()(`${endPoint}/${numeroDeclaration}/correspondances${paginationQuery || ''}`);
}

export function fetchDeclarationMaladie(declarationId) {
  return request()(`${endPoint}/${declarationId}`);
}

