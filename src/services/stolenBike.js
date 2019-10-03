import request from '@/utils/request';

export function addStolenBike(queryCommand) {
  const formData = new FormData();
  formData.append('command', JSON.stringify(queryCommand));
  return request()('/bikes', {
    method: 'POST',
    body: JSON.stringify(queryCommand),
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function getBikes() {
  return request()(`/bikes`);
}
