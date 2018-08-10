
import React from 'react';
import { Checkbox } from 'antd-mobile';

const CartTotal = (props) => (
  <div className = "m-cart-total">
    <div className="select-box">
        <Checkbox
        checked = {(props.cartTotal===props.selectNum) ? true : false}
        onChange = {props.changeSelect}
        ><span className="i-label">全选</span></Checkbox>
    </div>
    { props.edit || (<div className="data">
                        <span className="total">共{props.total}件</span>
                        <span>总计：</span>
                        <span className="totalPrice"><i>&yen;</i>{props.totalPrice}</span>
                      </div>)
    
    }
    { props.edit || (<div className="opera-btn btn-submit">去结算</div>)
    
    }
    
    { props.edit && (<div className="edit-group">
      <div className="opera-btn btn-collect">移至收藏</div>
      <div className="opera-btn btn-delete">删除</div>
      
    </div>)
    
    }
  
    
    
  </div>
);

export default CartTotal;