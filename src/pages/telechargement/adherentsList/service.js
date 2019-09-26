import request from '@/utils/request';

export function fetchAssures(payload) {
  console.log('payload', payload);
  return request()('http://192.168.1.236:8765/wa/api/v1/dim/adherents/editerAdherents', {
    prefix: '',
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'Application/json' },
    responseType: 'blob',
  });
}
