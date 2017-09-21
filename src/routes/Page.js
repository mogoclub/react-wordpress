import React from 'react'
import {Row,Col,Input} from 'antd'
import MainLayer from '../components/MainLayout/MainLayout'
import HeaderMeta from '../components/MainLayout/HeaderMeta';
import styles from './Blog.less'
import {connect} from 'dva'
import Sidebar from '../components/Siddbar'

const Search = Input.Search;
const Page = ({location,page,app})=>{
  const {categories,posts} = app;
  return(
    <MainLayer location={location}>

      <HeaderMeta>
        <div className={styles.meta}>
          <div className={styles.container}>
            <h1 style={{padding:'50px 0 0 0',fontSize:'34px',fontWeight:700}}>{page.title}</h1>
            <p style={{padding:'20px 0 0 0',fontSize:'23px'}} dangerouslySetInnerHTML={{__html:page.excerpt}}>

            </p>
          </div>
        </div>
      </HeaderMeta>
      <div className={styles.container}>
        <Row gutter={40}>
          <Col span={24}>
            <div className={styles.blog} dangerouslySetInnerHTML={{__html: page.content}}>
            </div>
          </Col>
          {/*<Col span={8}>*/}
            {/*<Sidebar {...app} />*/}
          {/*</Col>*/}
        </Row>

      </div>


    </MainLayer>
  )
}


export default connect(({page,app})=>({page,app}))(Page)
