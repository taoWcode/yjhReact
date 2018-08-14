import React from 'react';
import {Carousel} from 'antd-mobile';
import { Link } from 'react-router-dom';

const BasicCarousel = (props) => (

  
      <Carousel
      autoplay = {props.autoplay || true}
      infinite = {props.infinite || true}
      style = {{
        minHeight:'100px'
      }}
      >
        {props.carData.map((item,idx) => {
          if(item.tar !== undefined){
              return (
                        <Link
                          style = {{
                            display:'block',
                            width:'100%',
                            paddingTop:props.wvh
                          }}
                          to = {item.tar}
                          key = {idx}
                        >
                          <img 
                            src={item.imgUrl}
                            alt = {item.alt || ''}
                            style = {styleImg}
                          />
                        </Link>
              )
          }else{
              return (
                        <div
                          style = {{
                            display:'block',
                            width:'100%',
                            paddingTop:props.wvh
                          }}
                          key = {idx}
                        >
                          <img 
                            src={item.imgUrl}
                            alt = {item.alt || ''}
                            style = {styleImg}
                          />
                        </div>
              )
          }
        }
      )}
      </Carousel>
   
);
const styleImg = {
  display:'block',
  position:'absolute',
  left:0,
  top:0,
  width:'100%',
  height:'100%'
}

export default BasicCarousel;