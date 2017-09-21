import * as service from '../services/categories'
export default {
  namespace:'categories',
  state:{
    category:{
      title:'没有找到'
    }
  },
  subscriptions:{
    setup({dispatch,history}){
      return history.listen(({ pathname, query }) => {
        if (pathname === '/categories') {
          dispatch({ type: 'fetch',payload:query});
        }
      });
    }
  },
  reducers:{
    updateState(state,{payload}){
      return {
        ...state,
        ...payload
      }
    }
  },
  effects:{
    *fetch({payload},{call,put}){
      // console.log('payload',payload)
      const {data} = yield call(service.fetch,payload.slug)
      yield put({type:'updateState',payload:data})
    }
  }

}
