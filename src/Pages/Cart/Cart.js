

import React from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Stepper } from 'antd-mobile';

const CartList = (props) => (
  <div className = 'm-cartlist'>
  {props.cartList.map( (item,idx) => (
    <div className="cart-item" key = {idx}>
        <div className="select-box">
            <Checkbox data-id={item.id} data-selected={item.selected} checked= {item.selected === '1' ? true : false}  onChange = {props.changeSelect}/>
        </div>
       
            <Link to = {'/' + item.goods_id} className="pic">
              <img src={item.thumb} alt={item.alt || ''}/>
            </Link>
            <div className="info">
              <Link className="title s_overflow2" to = {'/' + item.goods_id}>{item.title}</Link>
              <p className="spec s_overflow">{item.spec_str}</p>
              <div className="info-bottom">
                  <span className="price">&yen;&nbsp;{item.shop_price}</span>
                  <div className="calc-box">
                  {/*
                    <Stepper style = {{ width: '100%',minWidth:'100px'}}
                      
                      max = {item.max_buy || item.store || Infinity}
                      min = {item.min_buy || 1}
                      step = {1}
                      value = {item.num}
                      showNumber  = {true}
                      readOnly = {false}
                      onChange = {props.changeNum}
                    />
                   */}
                   <b 
                     className="opera-btn btn-reduce"
                      data-min = { item.min_buy || 1 }
                      data-step = {1}
                      data-id = { item.id }
                      onClick = { props.reduceNum }
                    ></b>
                    <input type="text" className="input-num" value = { item.num } disabled/>
                   <b 
                      className="opera-btn btn-add"
                      data-max = { item.max_buy || item.store || Infinity }
                      data-step = {1}
                      data-id = { item.id }
                      onClick = { props.addNum }
                      
                    ></b>
                  </div>
              </div>
            </div>
       
    </div>
  ) )}
  </div>
);

export default CartList;