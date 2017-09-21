import React from 'react'
import {Row,Col} from 'antd'
import MainLayer from '../components/MainLayout/MainLayout'
import HeaderMeta from '../components/MainLayout/HeaderMeta';
import styles from './Blog.less'
import {connect} from 'dva'
import Sidebar from '../components/Siddbar'
import Comments from '../components/Blog/Comments'
const Blog = ({location,dispatch,blog,app})=>{
  const sidebarProps ={
    ...app,location,dispatch
  }
  return(
    <MainLayer location={location}>

      <HeaderMeta>
        <div className={styles.meta}>
          <div className={styles.container}>
            <h1 style={{padding:'50px 0 0 0',fontSize:'34px',fontWeight:700}}>{blog.title}</h1>
            <p style={{padding:'20px 0 0 0',fontSize:'23px'}} dangerouslySetInnerHTML={{__html:blog.excerpt}}>

            </p>
          </div>
        </div>
      </HeaderMeta>
      <div className={styles.container}>
        <Row gutter={40}>
          <Col span={16}>
            <div className={styles.blog} dangerouslySetInnerHTML={{__html: blog.content}}>
            </div>

          <Comments comments={blog.comments} />

          </Col>
          <Col span={8}>
            <Sidebar {...sidebarProps} />
          </Col>
        </Row>

      </div>


    </MainLayer>
  )
}


export default connect(({blog,app})=>({blog,app}))(Blog)
