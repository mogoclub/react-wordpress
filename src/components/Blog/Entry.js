import React from 'react'
import styles from './Entry.less'
import {Link} from 'dva/router'

const Entry = ({posts}) =>{
  console.log('posts',posts)
  return (
        <div>
          { posts.map((item,key)=>{
            return <article className={styles.article} key={key} >
              <header className={styles.mgBt20}>
                {item.attachments.length==0
                  ?''
                  : <Link to={`/blog?id=${item.id}`}>
                    <img style={{display:'block',width:'100%'}} className={styles.mgBt20} src={item.attachments[0].images.medium.url} alt=""/>
                  </Link>
                }
                <Link to={`/blog?id=${item.id}`}>
                  <h2 className={styles.title}>{item.title}</h2>
                </Link>
                <div>{item.date} By  {item.author.name} with {parseInt(item.comments.length)} comments</div>
              </header>
              <div style={{fontSize:'17px'}} className={styles.mgBt30} dangerouslySetInnerHTML={{__html:item.excerpt}}></div>
              <Link to={`/blog?id=${item.id}`} className={styles.read} >继续阅读</Link>
            </article>;
          })}
        </div>
  );
}
export default Entry;
