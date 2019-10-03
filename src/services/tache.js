import request from '@/utils/request';

export function fetchTaches(paginationQuery) {
  const policeId = localStorage.getItem('access-token') || 0;
  return request()(`/stolenbike/policecase/` + policeId);
}

export function fetchTachesNonAffected(paginationQuery) {
  return request()(`/stolenbike/unresolvedcases`);
}

export function asignTask(queryCommand) {
  return request()('/stolenbike/unresolvedcases', {
    method: 'POST',
    body: JSON.stringify(queryCommand),
    headers: { 'Content-Type': 'application/json' },
  });
}

export function solveCase(queryCommand) {
  return request()('/stolenbike/solvecase', {
    method: 'PUT',
    body: JSON.stringify(queryCommand),
    headers: { 'Content-Type': 'application/json' },
  });
}
