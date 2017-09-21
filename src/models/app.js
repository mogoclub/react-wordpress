
import * as service from '../services/app';


export default {
  namespace:'app',
  state:{
    categories:[],
    posts:[],
    pageIndex:[]
  },
  subscriptions:{
    setup({dispatch,history}){
      dispatch({type:'fetch'})
      dispatch({type:'get_recent_posts'})
      dispatch({type:'get_page_index'})
    }
  },
  reducers:{
    updateState(state,{payload}){
      return{
        ...state,
        ...payload
      }
    }
  },
  effects:{
    *fetch({},{call,put}){
      const {data} =yield call(service.fetch);
      const {categories} = data;
      yield put({type:'updateState',payload:{categories}})
    },
    *get_recent_posts({payload},{call,put}){
      const {data}  = yield call(service.get_recent_posts);
      const {posts} = data;
      yield put({type:'updateState',payload:{posts}})
    },
    *get_page_index({payload},{call,put}){
      const {data}  = yield call(service.get_page_index);
      const {pages} = data;
      yield put({type:'updateState',payload:{pageIndex:pages}})
    }
  }

}
