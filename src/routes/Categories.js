import React from 'react'
import {connect}  from 'dva'
import MainLayer from '../components/MainLayout/MainLayout'
import HeaderMeta from '../components/MainLayout/HeaderMeta';
import styles from './Categories.less'
import Sidebar from '../components/Siddbar/'
import Entry from '../components/Blog/Entry'
import {Row,Col} from 'antd'

const Categories = ({categories,app,location,dispatch})=>{
  const {posts,category} = categories;
  const sidebarProps ={
    ...app,location,dispatch
  }
  return (
    <MainLayer location={location}>
      <HeaderMeta>
        <div className={styles.meta}>
          <div className={styles.container}>
            <h1 style={{padding:'50px 0 0 0',fontSize:'34px',fontWeight:700}}>Categories : {category.title}</h1>
            {/*<p style={{padding:'20px 0 0 0',fontSize:'23px'}} dangerouslySetInnerHTML={{__html:blog.excerpt}}>*/}

            {/*</p>*/}
          </div>
        </div>
      </HeaderMeta>

      <div className={styles.container}>
        <Row gutter={40}>
          <Col span={16}>
            <h1 className={styles.br}>Categories : {category.title}</h1>
            {posts
              ? <Entry {...categories} />
              : <div>没有找到</div>
            }
          </Col>
          <Col span={8}>
            <Sidebar {...sidebarProps} />
          </Col>
        </Row>
      </div>
    </MainLayer>
  );
}
export default connect(({categories,app})=>({categories,app}))(Categories)
