import request from '@/utils/request';

export function searchChequesBloques(queryCommand) {
  return request()('/chequesBloques', {
    method: 'POST',
    body: JSON.stringify(queryCommand),
    headers: { 'Content-Type': 'Application/json' },
  });
}
