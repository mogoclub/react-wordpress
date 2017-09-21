import request from '../utils/request'

export function fetch(id){
  return request(`/api/?json=get_page&id=${id}`)
}
