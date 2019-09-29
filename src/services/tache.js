import request from '@/utils/request';

export function fetchTaches(paginationQuery) {
  return request()(`/bikes`);
}

export function asignTask(queryCommand) {
  return request()('/asignTask', {
    method: 'POST',
    body: JSON.stringify(queryCommand),
    headers: { 'Content-Type': 'application/json' },
  });
}
