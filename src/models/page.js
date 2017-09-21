import * as service from '../services/page'
export default {
  namespace:'page',
  state:{
    content:'没有找到',
  },
  subscriptions:{
    setup({dispatch,history}){
      return history.listen(({ pathname, query }) => {
        if (pathname === '/page') {
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
      const {data} = yield call(service.fetch,payload.id)
      if(data){
        const {page} = data;
        yield put({
          type:'updateState',
          payload:{...page}
        })
      }
    },

  }

}
