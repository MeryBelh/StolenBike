import request from '@/utils/request';

export function searchAdherent(queryCommand) {
  return request()('/adherents', {
    method: 'POST',
    body: JSON.stringify(queryCommand),
    headers: { 'Content-Type': 'Application/json' },
  });
}

export function editAdherent(adherent) {
  return request()('/adherents/modifier', {
    method: 'POST',
    body: JSON.stringify(adherent),
    headers: { 'Content-Type': 'Application/json' },
  });
}

export function fetchBeneficiaires(numeroAdherent, paginationquery) {
  return request()(`/adherents/${numeroAdherent}/beneficiaires${paginationquery}`);
}
export function fetchAdherentHistoriques(numeroAdherent, paginationquery) {
  return request()(`/adherents/${numeroAdherent}/historiques${paginationquery}`);
}

export function fetchBeneficiaire(numeroAdherent, numeroBeneficiaire) {
  return request()(`/adherents/${numeroAdherent}/${numeroBeneficiaire}`);
}
