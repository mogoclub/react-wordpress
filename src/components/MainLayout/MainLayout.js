import React from 'react';
import styles from './MainLayout.less';
import Header from './Header';
import Footer from  './Footer';
import {Helmet}  from 'react-helmet'
import {connect} from 'dva'
import NProgress from 'nprogress'


let lastHref;

function MainLayout({ children, location,app ,loading}) {
  const {categories} = app;
  const headerProp ={
    categories,
    location
  }

  const href = window.location.href

  if (lastHref !== href) {
    NProgress.start()
    if (!loading.global) {
      NProgress.done()
      lastHref = href
    }
  }


  return (
    <div className={styles.normal}>
      <Helmet>
        <title>前端镜像 | Femirror</title>
      </Helmet>
      <Header {...headerProp} />
      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default connect(({app,loading})=>({app,loading}))(MainLayout);
