import request from '@/utils/request';

export function fetchTaches(paginationQuery) {
  return request()(`/corbeil/taches${paginationQuery || ''}`);
}

