import request from '@/utils/request';

export function searchPrimes(queryCommand) {
  return request()('/primes', {
    method: 'POST',
    body: JSON.stringify(queryCommand),
    headers: { 'Content-Type': 'Application/json' },
  });
}
