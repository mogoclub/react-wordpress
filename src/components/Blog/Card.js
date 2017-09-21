import React from 'react'
import styles from './Card.less'
import {Link} from 'dva/router'
const Card =({blog}) =>{
  return (
    <div>
      {blog && <div className={styles.card}>
        <a href="">
          {blog.thumbnail
            ?<img src={blog.thumbnail} alt=""/>
            :<img src="http://blog.femirror.com/wp-content/uploads/2017/09/xion_1x-150x150.png" alt=""/>
          }
        </a>
        <div className={styles.comment}>
          {blog.date} <a href="">{blog.comments.length} COMMENTS</a>
        </div>
        <h1 className={styles.title}>
          <Link to={`/blog?id=${blog.id}`}>{blog.title}</Link>
        </h1>
        <h3 dangerouslySetInnerHTML={{__html:blog.excerpt}}></h3>
      </div>}
    </div>
  )
}
export  default Card
