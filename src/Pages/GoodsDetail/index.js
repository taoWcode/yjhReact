import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Icon, List } from 'antd-mobile';
import Header from '../../Components/common/Header.jsx';
import BasicCarousel from '../../Components/Carousel/basic.js';
import CommentList from '../../Components/CommentList/index.js';

import iconCart from '../../assets/icons/icon-b-cart.png';
import iconShare from '../../assets/icons/icon-b-share.png';
import iconHome from '../../assets/icons/icon-b-home.png';
import iconRule from '../../assets/icons/icon-rule.png';

export default class GoodsDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      carData:[],
      showService:false,
      showSpec:false
    }

    this.isShowService = this.isShowService.bind(this);
    this.isShowSpec = this.isShowSpec.bind(this);
  }

  //规格属性弹出
  isShowSpec(){
    console.log("触发");
    this.setState((prevState) => ({
      showSpec:!prevState.showSpec
    }))
  }
  //服务说明模板弹出 
  isShowService(){
    this.setState((prevState) => ({
      showService:!prevState.showService
    }))
  }
  componentDidMount(){
    this.setState({
      carData:tempCarData
    })
    console.log(this.state.showService)
  }
  render(){
    return (        
      <div className = 'g-goods-detail m-page'>
          <Header title="商品详情" canBack = '1'/>
          <div className="m-main">
              { this.state.carData.length > 0 && (<BasicCarousel carData = {this.state.carData} wvh = '100%'/>) }
              <DetailHeader  isShowService = {this.isShowService}/>

              <div className="m-simple-box">
                  <SpecSelect isShowSpec = {this.isShowSpec} showSpec = {this.state.showSpec}/>
              </div>

              <div className="m-simple-box">
                <Comment/>
              </div>
          </div>
          <DetailBottom isShowSpec = {this.isShowSpec}/>
          <ServiceSheet showService = {this.state.showService} isShowService = {this.isShowService}/>
      </div>
    )
  }
}


const ServiceSheet = (props) => (
  <div className = {props.showService ? 'm-service-jump s-show':'m-service-jump'}>
      <span className="m-mask-layer" onClick={props.isShowService}></span>
      <div className="service-container">
          <div className="header-part">
            <p className="title">服务说明</p>
            <b className="btn-close" onClick={props.isShowService}><Icon type="cross" className="icon" color="#999" size="md"/></b>
          </div>
          <div className="body-part">
            <ul className="service-list">
              <li><p className = 'text'>商家包邮发货</p></li>
              <li><p className = 'text'>商家包邮发货</p></li>
              <li><p className = 'text'>商家包邮发货</p></li>
              <li><p className = 'text'>商家包邮发货</p></li>
              <li><p className = 'text'>商家包邮发货</p></li>
              <li><p className = 'text'>商家包邮发货</p></li>
            </ul>
          </div>
      </div>
  </div>
)

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
    <div className="p-bottom">
       <div className="projection-list" onClick = { props.isShowService }>
         <span className="item">商家包邮发货</span>
         <span className="item">七天退货</span>
         <span className="item">退货补运费</span>
       </div>
    </div>
  </div>
);


const SpecSelect = (props)=>(
  <div className ='m-spec-container'>
    <div className="select-line" onClick = {props.isShowSpec}>
      <div className="left-params">
          <span className="label">选择</span>
          <p className="params s_overflow">颜色/内存</p>
      </div>
      <div className="right">
        <Icon type="right" size="sm" color="#999"/>
      </div>
    </div>
    <div className={  props.showSpec ? "spec-content-box s-show":"spec-content-box"}>
        <span className="m-mask-layer" onClick = {props.isShowSpec}></span>
        <div className="content-box">
            <div className="content-header">
                <span className="btn-close" onClick = {props.isShowSpec}><Icon type="cross-circle" size="md" color="#666"/></span>
                <div className="pic">
                  <img src="https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png" alt=""/>
                </div>
                <div className="info">
                  <p className="shop-price">&yen;&nbsp;190.00</p>
                  <p className="store">库存&nbsp;157件</p>
                  <p className="spec s-overflow2">已选择：红色&nbsp;128G</p>
                </div>
            </div>
            <div className="content-body">
              <div className="spec-list">
                  <dl className="spec-item">
                      <dt>颜色</dt>
                      <dd>
                          <span className="item">红色 128G</span>
                          <span className="item">橙色 128G</span>
                          <span className="item">黄色 64G</span>
                          <span className="item">绿色 24G</span>
                      </dd>
                  </dl>
              </div>
              <div className="calc-opera">
                  <span className = 'label'>数量</span>
                  <div className = 'calc-box'>
                    <b 
                      className="opera-btn btn-reduce"
                        data-min = ""
                        data-step = ""
                        data-id = ""
                       
                      ></b>
                      <input type="text" className="input-num" value = {1} disabled/>
                    <b 
                        className="opera-btn btn-add"
                        data-max = ""
                        data-step = {1}
                        data-id = ""
                        
                        
                      ></b>
                  </div>
              </div>
            </div>
            <div className="content-footer">
            <div className="m-detail-bottom">
                <span className="btn-addcart">加入购物车</span>
                <span className="btn-lbuy">立即购买</span>
            </div>
            </div>
        </div>
    </div>
  </div>
)

const DetailBottom = (props) => (
  <div className="m-detail-bottom">
    <span className="btn-collect"><i className="icon"></i>收藏</span>
    <span className="btn-addcart" onClick = {props.isShowSpec}>加入购物车</span>
    <span className="btn-lbuy">立即购买</span>
  </div>
);

const Comment = (props) => (
  <div className="m-comment-container">
    <div className="comment-header">
        <div className="left">商品评价(588)</div>
        <Link className="right" to="/"><span className="text">99.8%好评</span><Icon type="right" size = "md" color="#999"/></Link>
    </div>
    <CommentList/>
  </div>
)
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