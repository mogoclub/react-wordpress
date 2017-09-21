import * as service from '../services/search'
export default {
  namespace:'search',
  state:{
    posts:[],
  },
  subscriptions:{
    setup({dispatch,history}){
      return history.listen(({ pathname, query }) => {
        if (pathname === '/search') {
          dispatch({type: 'fetch', payload: query});
        }
      });
    }
  },
  reducers:{
    updateState(state,{payload}){
      console.log('update',payload)
      // 回到顶部
      window.scrollTo(0,0)
      return{...state,...payload}

    }
  },
  effects:{
    *fetch({payload},{call,put}){
      const {data} = yield call(service.search,payload.search)
      if(data){
        const {posts} = data;
        yield put({
          type:'updateState',
          payload:{posts}
        })
      }
    },

  }

}
