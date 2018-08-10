/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-27 10:05:04
 * @version $Id$
 */

import React from 'react';
import { Toast } from 'antd-mobile';
import Footer from '../../Components/common/Footer';
import Header from '../../Components/common/Header';
import CartList from './Cart.js';
import CartTotal from './carttotal.js'
import './index.scss';

class Cart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
         totalPrice:0,
         total:0,
         cartList:[],
         selectNum:0,
         showEdit:false
    };

    this.changeSelect = this.changeSelect.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.addNum = this.addNum.bind(this);
    this.reduceNum = this.reduceNum.bind(this);
    this.showEditBlock = this.showEditBlock.bind(this);
  }
  showEditBlock(){
    this.setState((prevState) => ({
        showEdit:!prevState.showEdit
    }))
  }
  //删除操作
  deleteGoods(){
    const list = this.state.cartList,
          deleteStr = [];
    for (let i = 0; i < list.length; i++) {
        if(list[i].selected === '1'){
          deleteStr.push(list[i].id);
          list.splice(i,1);
          i--;
        }
    }
  }
  //单件商品数量加操作
  addNum(e){
    const tar = e.target,
          id  = tar.getAttribute('data-id'),
          max_buy = parseInt(tar.getAttribute('data-max')),
          step = parseInt(tar.getAttribute('data-step')),
          list = this.state.cartList;
    let num = 0,
        total = 0,
        totalPrice = 0;
    list.forEach( (item) => {
        if(id == item.id){
            num = item.num + step;
            if(num > max_buy){
              num = max_buy;
              Toast.info(`一次最多可以购买${max_buy}件`,2,null,true)
            }
            item.num = num;
        }
        if(item.selected === '1'){
          total += item.num;
          totalPrice += item.num * item.shop_price;
        }
    } );

    this.setState({
      cartList:list,
      total:total,
      totalPrice:totalPrice
    },()=>{
      console.log(`ID为${id}的商品数量改为${num}`);
    })
  }
  //单件商品减操作
  reduceNum(e){
    
    const tar = e.target,
          id  = tar.getAttribute('data-id'),
          min_buy = parseInt(tar.getAttribute('data-min')),
          step = parseInt(tar.getAttribute('data-step')),
          list = this.state.cartList;
    let num = 0,
        total = 0,
        totalPrice = 0;
    list.forEach( (item) => {
        if(id == item.id){
            num = item.num - step;
            if(num < min_buy){
              num = min_buy;
              Toast.info(`一次最少购买${min_buy}件`,2,null,true)
            }
            item.num = num;
        }
        if(item.selected === '1'){
          total += item.num;
          totalPrice += item.num * item.shop_price;
        }
    } );

    this.setState({
      cartList:list,
      total:total,
      totalPrice:totalPrice
    },()=>{
      console.log(`ID为${id}的商品数量改为${num}`);
    })

  }
  
  //全选操作
  selectAll(e){
      const checked = e.target.checked;
      const selectedStr = [];
      const list = this.state.cartList;
      let total = 0,
          totalPrice = 0;

        if ( checked ) {
            list.forEach(( item, idx ) => {
              item.selected = '1';
              selectedStr.push(item.id);
              total += item.num;
              totalPrice += item.num * item.shop_price;
          });
        }else{
          list.forEach( (item, idx) => {
            item.selected = '0'
          } )
        }
        
        this.setState({
          cartList:list,
          selectNum:selectedStr.length,
          total:total,
          totalPrice:totalPrice
        },()=>{
          console.log("全选操作,被选中购物车ID为："+ selectedStr.join(','));
        })

  }
  //当个商品选择
  changeSelect(e){
    const id = e.target['data-id'];
    const list = this.state.cartList;
    const selectedStr = [];
    let total = 0,
    totalPrice = 0;

    list.forEach((item,idx) => {
        if(id === item.id){
          if ( item.selected === '1' ) {
            item.selected = '0'
          }else{
            item.selected = '1';
            selectedStr.push(item.id);
            total += item.num; 
             totalPrice += item.num * item.shop_price;
          }
          
        }else{
           if (item.selected === '1') { 
             selectedStr.push(item.id);
             total += item.num; 
             totalPrice += item.num * item.shop_price;
            }         
        }
    })
   
    this.setState({
      cartList:list,
      selectNum:selectedStr.length,
      total:total,
      totalPrice:totalPrice
    },()=>{
      console.log('单选操作,异步提交被选中的cartId：' + selectedStr.join(',') )
    })

    
  }
  componentDidMount() {
        this.setState({
          total:tempCart.total,
          totalPrice:tempCart.total_price,
          cartList:tempCart.list,
          selectNum:tempCart.select_num
        })
  }

	render(){
		return (<div className = 'g-cart m-page'>
      <Header title="购物车" canBack="1"/>
        <div className ="m-cart-edit">
           <b onClick = {this.showEditBlock} className = {this.state.showEdit ? 'btn-edit s-active' : 'btn-edit'}>{this.state.showEdit ? '完成':'编辑全部'}</b>
        </div>
        <div className="m-main pt8" ref="mainBox">
            { this.state.cartData !== null && <CartList cartList = { this.state.cartList } 
                                                        reduceNum = { this.reduceNum } 
                                                        addNum = { this.addNum } 
                                                        changeSelect = { this.changeSelect }/>}
        </div>
        <CartTotal 
          totalPrice = {this.state.totalPrice} 
          selectNum = {this.state.selectNum} 
          total = {this.state.total} 
          cartTotal = {this.state.cartList.length}
          changeSelect = {this.selectAll}
          edit = {this.state.showEdit}
          />
       <Footer history = {this.props.history} sactive="Cart"/>
    </div>)
	}
}



export default Cart;


const tempCart = {
  total_price:900.00,
  total:12,
  select_num:2,
  list:[
    {
      id:'2',
      goods_id:'2',
      thumb:'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
      title:'康恩贝 蛋白粉 大豆分离蛋白 乳清蛋白 增强免疫力 400g/罐',
      num:2,
      selected:'1',
      shop_price:50,
      spec_str:'红色*M（170/88A',
      spec_id:'2243',
      store:998,
      min_buy:1,
      max_buy:100,
    },
    {
      id:'3',
      goods_Id:'5',
      thumb:'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
      title:'养生堂天然维生素C咀嚼片70片 养生堂VC 增强免疫力 VC70赠VC25+...',
      num:10,
      selected:'1',
      shop_price:80,
      spec_str:'白色*M（170/88A',
      spec_id:'2243',
      store:10,
      max_buy:10,
      min_buy:1,
    }
  ]
}