import request from '@/utils/request';

/*export function searchChequesBloques(queryCommand) {
  return request()('/chequesBloques', {
    method: 'POST',
    body: JSON.stringify(queryCommand),
    headers: { 'Content-Type': 'Application/json' },
  });
}*/


export function addStolenBike(queryCommand) {
  console.log(queryCommand);
  const formData = new FormData();
  formData.append('command', JSON.stringify(queryCommand));
  return request()('/bikes', {
    method: 'POST',
    body: JSON.stringify(queryCommand),
    //requestType: 'form',
      headers: { 'Content-Type': 'application/json'} ,
  });
}