import request from '../utils/request';


export async function fetchTypePrestatiaire() {
  return request()('/prestataires/typePrestatiaire', {
    method: 'POST',
  });
}

export async function fetchVilles(typePresatataire) {
  return request()(`/prestataires/${typePresatataire}/villesByTypePresatataire`);
}

export async function fetchPrestatiaire(typePresatataire, codeVille ) {
  return request()(`/prestataires/${typePresatataire},${codeVille}/prestataireByVilleAndType`);

}

export async function fetchPrestataire(codePrestataire){
  return request()(`/prestataires/${codePrestataire}`);
}
