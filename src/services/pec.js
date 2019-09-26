import request from '@/utils/request';

export function fetchAdherent(numeroAdherent) {
  return request()('/adherents', {
    method: 'POST',
    body: JSON.stringify({ numeroAdherent }),
    headers: { 'Content-Type': 'Application/json' },
  });
}

export function searchContrat(queryCommand) {
  return request()('/contrats', {
    method: 'POST',
    body: JSON.stringify(queryCommand),
    headers: { 'content-type': 'Application/json' },
  });
}

export function fetchPathologies() {
  return request()('/pathologies', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
  });
}

export function fetchBaremes() {
  return request()('/baremes/baremePrestataireConnecte', {
    headers: { 'Content-Type': 'Application/json' },
  });
}

export function fetchBaremeById(codeBareme) {
  return request()(`/baremes/bareme/${codeBareme}`, {
    headers: { 'Content-Type': 'Application/json' },
  });
}

export function savePEC(pec, autre, pm, devis, cin) {
  const formData = new FormData();
  formData.append('command', JSON.stringify(pec));
  formData.append('AUTRE', autre);
  formData.append('PM', pm);
  formData.append('DEVIS', devis);
  formData.append('CIN', cin);
  return request()('/declarationMaladies/creerPEC', {
    method: 'POST',
    body: formData,
    requestType: 'form',
    //   headers: { 'Content-Type': 'multipart/form-data'} ,
  });
}

// export function savePEC(pec, files) {
//   return request()('/declarationMaladies/creerPEC', {
//     method: 'POST',
//     body: JSON.stringify(pec),
//     headers: { 'Content-Type': 'Application/json' },
//   });
// }
export function validatePec(pecId) {
  return request()(`/declarationMaladies/${pecId}/valider`);
}

export function rejectPec(payload) {
  return request()(`/declarationMaladies/rejeter`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'Application/json' },
  });
}

export function giveUpPEC(pecId) {
  return request()(`/declarationMaladies/${pecId}/abandonner`);
}

export function submitPEC(pecId) {
  return request()(`/declarationMaladies/${pecId}/envoyer`);
}

export function editPec(pec) {
  return request()(`/declarationMaladies/modifier`, {
    method: 'POST',
    body: JSON.stringify(pec),
    headers: { 'Content-Type': 'Application/json' },
  });
}

export function editPecDetails(pec) {
  return request()(`/declarationMaladies/modifierDetailsDeclaration`, {
    method: 'POST',
    body: JSON.stringify(pec),
    headers: { 'Content-Type': 'Application/json' },
  });
}

export function editObservation(command) {
  return request()(`/declarationMaladies/modifierObservation`, {
    method: 'POST',
    body: JSON.stringify(command),
    headers: { 'Content-Type': 'Application/json' },
  });
}

export function fetchPecsService(queryCommand) {
  return request()('/demandePecs', {
    method: 'POST',
    body: JSON.stringify(queryCommand),
    headers: { 'content-type': 'Application/json' },
  });
}

export function fetchPecStatutsService() {
  return request()('/demandePecs/statutsPec', {
    method: 'POST',
    body: JSON.stringify({}),
    headers: { 'content-type': 'Application/json' },
  });
}

// /{id}/modifierObservation
