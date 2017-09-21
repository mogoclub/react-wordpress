import request from '../utils/request'


export function search(search){
  return request(`/api/?json=get_search_results&search=${search}`);
}
