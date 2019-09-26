import request from '@/utils/request';

export function fetchDeclarations(numeroBordereau) {
  return request()('/declarationMaladies', {
    method: 'POST',
    body: JSON.stringify({numeroBordereau}),
    headers: { 'content-type': 'Application/json' },
  });
}

export function searchBordereau(queryCommand) {
  return request()('/bordereaux', {
    method: 'POST',
    body: JSON.stringify(queryCommand),
    headers: { 'Content-Type': 'Application/json' },
  });
}
