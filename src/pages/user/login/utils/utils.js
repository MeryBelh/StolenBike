import decode from 'jwt-decode';
import moment from 'moment';
import { setAuthority, deleteAuthority } from './authority';
import { getPrestataireConnecte } from '../../../../services/user';
import router from 'umi/router';

function* persistTokenInformation(token) {

  const { access_token, expires_in } = token;


  yield localStorage.setItem('access-token', JSON.stringify(access_token));
  yield localStorage.setItem(
    'token-valid-until',
    JSON.stringify(moment().valueOf() + expires_in * 1000),
  );

  const { authorities } = decode(access_token);
  const indexOfRolePrestataitre = authorities.indexOf('ROLE_SANTE_PRESTATAIRE')
  if(indexOfRolePrestataitre > -1)
  {
    const {typePrestataire} = yield getPrestataireConnecte()
    authorities.push( typePrestataire)
  }
  setAuthority(authorities);
}

function deleteTokenInformation() {
  localStorage.removeItem('token-valid-until');
  localStorage.removeItem('access-token');
  deleteAuthority();
}

function getAccessToken (){


  const validUntil = localStorage.getItem('token-valid-until') || 0;
  const now = moment().valueOf();

  const accessToken = JSON.parse(localStorage.getItem('access-token'));

  if (now < validUntil && accessToken){
    return accessToken;
  }

  deleteTokenInformation();
  router.push('/user/login')
  return null;
};

export { persistTokenInformation, getAccessToken, deleteTokenInformation };
