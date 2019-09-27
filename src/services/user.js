import request from '@/utils/request';
export async function query() {
  return request()('/api/users');
}
export async function queryCurrent() {
  return request()('/api/currentUser');
}
export async function queryNotices() {
  return request()('/corbeil/notifications', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
  });
}

export async function readNotification(id) {
  return request()(`/corbeil/${id}/lireNotification`);
}

export async function fetchToken(params) {
  const { userName, password } = params;
  return request()('http://192.168.1.236:8088/oauth/token', {
    prefix: '',
    method: 'POST',
    body: `username=${userName}&password=${password}&grant_type=password`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic d2ZhLndhLmRpbTpBc2MyNTVQZHM=',
    },
  });
}

export async function refreshToken(token) {
  return request()('/login/refreshToken', {
    method: 'POST',
    body: `token=${token}`,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
}

export async function getPrestataireConnecte() {
  return request()('/prestataires/prestataireConnecte');
}




export function autheticate(params) {
  const { userName, password } = params;
  const payload = {
    'login': userName,
    'passwd':password
  }
  return request()('/policeofficers/authenticate', {
    method: 'POST',
    body: JSON.stringify(payload),
     headers: { 'Content-Type': 'application/json'} ,
  });
}