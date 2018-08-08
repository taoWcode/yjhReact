
import React from 'react';
import {withRouter} from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';

const Header  = withRouter( ({history,title,canBack}) => (
  <div className="m-header">
    <NavBar 
     mode="light"
     icon={ canBack === '1' && <Icon type="left" size="lg" color="#666"/>}
     onLeftClick = {()=>{ canBack === '1' && history.goBack();}}
     >{title || 'JUNSHOP'}</NavBar>
  {/*
    {canBack == '1' ? (<div className="left back-icon" onClick = {()=>{
      history.goBack()
    }}></div>) : ((<div className="left"></div>))
    }
    <div className="middle">{title || 'JUNSHOP'}</div>
    <div className="right"></div>
    */}
  </div>
))

export default Header;