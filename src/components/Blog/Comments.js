import React from 'react'
import styles from './Comments.less'
const Comments =({comments})=>{
  return (
    <div>
      <br/>
        <h1 className={styles.mgBt30}>评论</h1>
        {comments
          ?comments.map((comment,key)=>{
            return <div key={key}>
              <h2 className={styles.mgBt10}>{comment.author.name}</h2>
              <p className={styles.mgBt10} dangerouslySetInnerHTML={{__html:comment.content}}>
              </p>
              <p className={styles.mgBt20}>{comment.date}</p>
            </div>
          })
          :'没有评论'
        }

    </div>
  )
}
export default Comments;
