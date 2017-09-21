import React from 'react';
import { Router } from 'dva/router';


const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      name: 'IndexPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('./models/menu'));
          cb(null, require('./routes/IndexPage'));
        });
      },
    },
    {
      path:'/categories',
      name:'Categories',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/categories'));
          cb(null, require('./routes/Categories'));
        });
      },
    },
    {
      path:'/search',
      name:'Search',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/search'));
          cb(null, require('./routes/Search'));
        });
      },
    },
    {
      path:'/blog',
      name:'Blog',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/blog'));
          cb(null, require('./routes/Blog'));
        });
      },
    },
    {
      path:'/page',
      name:'Page',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/page'));
          cb(null, require('./routes/Page'));
        });
      },
    },
    {
      path: '*',
      name: '404',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null,require('./routes/Error404'));
        });
      },
    },
  ];
  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
