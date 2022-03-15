import {request} from "umi";

export async function getNames(options) {
  return request('/api/names', {
    method: 'GET',
    ...(options || {}),
  });
}
