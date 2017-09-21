import request from '../utils/request'

export function fetch(){
    return request(`api/?json=get_category_index`);
}
export function get_recent_posts(){
  return request(`api/?json=get_recent_posts`);
}
export function get_page_index(){
  return request(`api/?json=get_page_index`);
}
