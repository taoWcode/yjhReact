import React from 'react';
import { Link } from 'react-router-dom';
import emptyIcon  from '../../assets/icons/shopcart.png';

const emptyCart = (props) => (
  <div class="m-empty-cart">
      <div className="pic">
        <img src={emptyIcon} alt=""/>
        <Link className = 'btn-new' to="/">前去购物</Link>
      </div>
  </div>
);

export default emptyCart;