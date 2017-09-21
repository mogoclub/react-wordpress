import React from 'react'
import styles from './index.less'
import {Input} from 'antd'
import {Link} from 'dva/router'
import { routerRedux } from 'dva/router'

const Search = Input.Search
const Sidebar = ({location,dispatch,categories,posts}) =>{

  function onSearch(value){
    dispatch(routerRedux.push({
      pathname:'/search',
      query: {
        search:value
      },
    }))
  }
  const defaultValue = location?location.query.search:'';

  return (
    <div className={styles.sidebar}>
      <Search
        defaultValue={defaultValue}
        placeholder="input search text"
        className={styles.search}
        onSearch={onSearch}
      />
      <div>
        <h2 className={styles.mgBt20}>Categories</h2>
        <div className={styles.mgBt40}>
          {categories.map(function (cate,key) {
            return <Link key={key} style={{marginBottom:'8px',fontSize:'14px',display:'block',fontWeight:'bold'}} className={styles.mgBt10} to={`/categories?slug=${cate.slug}`}><div>{cate.title}</div></Link>;
          })}
        </div>
        <h2 className={styles.mgBt20}>Recent Posts</h2>
        <div className={styles.mgBt40}>
          {posts.map(function (cate,key) {
            return <div key={key} className={styles.mgBt20}>
              <Link key={key}
                    style={{fontSize:'14px',display:'block',fontWeight:'bold'}}
                    to={`/blog?id=${cate.id}`}>
                <div>{cate.title} </div>
              </Link>
              <div>{cate.modified}</div>
            </div>;
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
