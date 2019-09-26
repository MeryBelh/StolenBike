import request from '@/utils/request';


export function searchContrat(queryCommand){
  return request()('/contrats', {
    method: 'POST',
    body: JSON.stringify(queryCommand),
    headers: { 'content-type': 'Application/json' },
  });
}

export function fetchAvenants(numeroContrat) {
  return request()(`/contrats/${numeroContrat}/avenants`);
}
export function fetchPrestations(numeroContrat, queryString) {
  return request()(`/contrats/${numeroContrat}/prestations${queryString}`);
}
export function fetchClauses(numeroContrat, queryString) {
  return request()(`/contrats/${numeroContrat}/clauses-particulieres${queryString}`);
}
export function fetchPrimes(numeroContrat, queryString) {
  return request()(`/contrats/${numeroContrat}/primes${queryString}`);
}
