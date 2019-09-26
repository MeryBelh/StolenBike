import request from '@/utils/request';

export function fetchEditCompte(obj) {
  return request()('http://192.168.1.236:8765/wa/api/v1/dim/declarationMaladies/editerDecompte', {
    prefix: '',
    method: 'POST',
    body: JSON.stringify(obj),
    headers: { 'Content-Type': 'Application/json' },
    responseType: 'blob',
  });
}
