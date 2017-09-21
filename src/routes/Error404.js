import React from 'react'
import MainLayout from '../components/MainLayout/MainLayout'
import HeaderMeta from '../components/MainLayout/HeaderMeta'
import styles from './Error404.less'
import Helmet from 'react-helmet'
const Error404 =()=>{

  return (
    <MainLayout location={location}>
      <Helmet>
        <title>404 | 前端镜像 | Femirror</title>
      </Helmet>
      <HeaderMeta>
        <div className={styles.meta}>
          <div className={styles.container}>
            <h1 style={{padding:'50px 0 0 0',fontSize:'30px',fontWeight:700}}>404 页面没有找到 ):</h1>
            <p style={{padding:'20px 0 0 0',fontSize:'20px'}}>由React全家桶打造的前端, WordPress提供的Json数据 .</p>
          </div>
        </div>
      </HeaderMeta>

      <div className={styles.container}>
        <h1>404</h1>
      </div>

      <br/><br/><br/>
    </MainLayout>
  )
}


export  default Error404
