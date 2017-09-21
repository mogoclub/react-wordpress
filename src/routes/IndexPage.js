import React from 'react';
import {connect} from 'dva';
import {Row,Col,Icon} from 'antd';
import styles from './IndexPage.less';
import MainLayout from '../components/MainLayout/MainLayout';
import HeaderMeta from '../components/MainLayout/HeaderMeta';
import Slide from '../components/Slide/Slide'
import Card from '../components/Blog/Card'

function IndexPage({location,app}) {
  const {posts,pageIndex} = app;
  return (
    <MainLayout location={location}>
      <HeaderMeta>
        <div className={styles.meta}>
          <div className={styles.container}>
            <h1 style={{padding:'50px 0 0 0',fontSize:'30px',fontWeight:700}}>React Wordress</h1>
            <p style={{padding:'20px 0 0 0',fontSize:'20px'}}>由React全家桶打造的前端, WordPress提供的Json数据 .</p>
          </div>
        </div>
      </HeaderMeta>
      <Slide pages={pageIndex} />
      <div className={styles.wrap}>
        <div className={styles.columns}>
          <Row gutter={30}>
            <Col span={8}>
              <Icon style={{fontSize:'50px',margin:'20px 0 20px',color:'#3498DB'}} type="smile" />
             <h1 className={styles.mgBt10}> 便捷</h1>
              <h3 className={styles.mgBt10}>功能强大的WordPress后台依旧可以使用,安装插件不需要自己重新写restful接口.</h3>
              <div><a  href=""><h2 className={styles.learn}>Learn more</h2></a></div>
            </Col>
            <Col span={8}>
               <Icon style={{fontSize:'50px',margin:'20px 0 20px',color:'#2ECC71'}} type="skin" />
              <h1 className={styles.mgBt10}> 简洁</h1>
              <h3 className={styles.mgBt10}>借鉴(:各类网站UI设计,搭载Ant design(之后会用的多),界面清爽简洁.</h3>
              <div><a  href=""><h2 className={styles.learn}>Learn more</h2></a></div>
            </Col>
            <Col span={8}>
              <Icon style={{fontSize:'50px',margin:'20px 0 20px','color':'#1ABC9C'}} type="fork" />
              <h1 className={styles.mgBt10}> 维护</h1>
              <h3 className={styles.mgBt10}>作为个人博客前端,将会不断的更迭此项目,不必担心失去维护.</h3>
              <div><a  href=""><h2 className={styles.learn}>Learn more</h2></a></div>
            </Col>
          </Row>
        </div>
      </div>
      <div>
        <div className={styles.container}>
          <Row gutter={30}>
            <Col span={8}>
              <Card blog={posts[0]} />
            </Col>
            <Col span={8}>
              <Card blog={posts[1]} />
            </Col>
            <Col span={8}>
              <Card blog={posts[2]} />
            </Col>
          </Row>
        </div>
      </div>
      <br/><br/><br/>
    </MainLayout>
  );
}

IndexPage.propTypes = {};

export default connect(({app})=>({app}))(IndexPage);
