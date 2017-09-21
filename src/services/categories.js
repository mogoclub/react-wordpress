import request from '../utils/request'


export function fetch(slug){
  return request(`/api/?json=get_category_posts&slug=${slug}`);
}
