import react from 'react'
import styles from './Slide.less'
import svg from '../../assets/browser-bar.svg'
import {Carousel,Icon} from 'antd'
import {Link} from 'dva/router'
const Slide = ({pages}) =>{
  function SampleNextArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className+" "+styles.SampleNextArrow}
        style={{...style}}
        onClick={onClick}
      > <Icon type="caret-right" /></div>
    );
  }

  console.log(pages);
  function SamplePrevArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className+" "+styles.SamplePrevArrow}
        style={{...style}}
        onClick={onClick}
      > <Icon type="caret-left" /></div>
    );
  }
  const settings = {
    dots: false,
    arrows:true,
    autoplay:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return(
    <div className={styles.normal}>
      <img src={svg} style={{display: 'block'}} alt=""/>
      <div className={styles.slider}
           style={{width: '980px', overflow: 'hidden',maxHeight:'600px'}}>
        {pages.length>0
          ? <Carousel {...settings} >
            {pages.map((page,key)=>{
              if(!page.thumbnail) return;
              return  <div style={{position:'relative'}} key={key+1}>
                <Link  to={`/page?id=${page.id}`}>
                  <img src={page.thumbnail_images.full.url}
                       alt=""/>
                  <div className={styles.overlay}>
                    <div className={styles.title}>
                      <h2 >{page.title}</h2>
                    </div>
                  </div>
                </Link>
              </div>
            })}
          </Carousel>
          : <div>none</div>
        }

      </div>
    </div>
  );
}
export default Slide
