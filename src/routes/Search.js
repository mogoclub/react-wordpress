import React from 'react'
import {connect}  from 'dva'
import MainLayer from '../components/MainLayout/MainLayout'
import HeaderMeta from '../components/MainLayout/HeaderMeta';
import styles from './Categories.less'
import Sidebar from '../components/Siddbar/'
import Entry from '../components/Blog/Entry'
import {Row,Col} from 'antd'

const Search = ({search,app,location,dispatch})=>{
  const {posts} = search
  const sidebarProps ={
    ...app,location,dispatch
  }
  return (
    <MainLayer location={location}>
      <HeaderMeta location={location}>
        <div className={styles.meta}>
          <div className={styles.container}>
            <h1 style={{padding:'50px 0 0 0',fontSize:'34px',fontWeight:700}}>Search : {location.query.search}</h1>
          </div>
        </div>
      </HeaderMeta>

      <div className={styles.container}>
        <Row gutter={40}>
          <Col span={16}>
            <h1 className={styles.br}>Search : {location.query.search}</h1>
            {posts.length
              ? <Entry {...search} />
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
export default connect(({search,app})=>({search,app}))(Search)
