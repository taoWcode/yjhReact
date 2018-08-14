import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Header from '../../Components/common/Header.jsx';
import BasicCarousel from '../../Components/Carousel/basic.js';

import iconCart from '../../assets/icons/icon-b-cart.png';
import iconShare from '../../assets/icons/icon-b-share.png';
import iconHome from '../../assets/icons/icon-b-home.png';

export default class GoodsDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      carData:[]
    }
  }

  componentDidMount(){
    this.setState({
      carData:tempCarData
    })
  }

  render(){
    return (
      <div className = 'g-goods-detail m-page'>
          <Header title="商品详情" canBack = '1'/>
          <div className="m-main">
              { this.state.carData.length > 0 && (<BasicCarousel carData = {this.state.carData} wvh = '100%'/>) }
              <DetailHeader/>
          </div>
      </div>
    )
  }
}

const DetailHeader = (props) => (
  <div className="m-detail-header">
    <div className="p-body">
        <div className="left-side">
            <b className="title s_overflow2">纯棉夏季宽松短袖t恤女韩版黑色纯色bf风中长款白色体恤女短袖 纯棉夏季宽松短</b>
            <p className="simple-line">
                <span className="shop-price"><small>&yen;</small>108.30</span>
                <span className="marker-price">&yen;115.30</span>
                <span className="label-list">
                  <i>包邮</i>
                </span>
            </p>
        </div>
        <div className="right-side">
            <b className="btn-share">
              <img src={iconShare} alt=""/>
            </b>
        </div>
    </div>
    <div className="p-bottom"></div>
  </div>
);

//模拟数据
const tempCarData = [
  {
    
    imgUrl:'https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%2031%402x.png',
  },
  {
    
    imgUrl:'https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%2031%402x.png',
  },
  {
    
    imgUrl:'https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%2031%402x.png',
  }
]