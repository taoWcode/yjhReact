import React from 'react';
import { Link } from 'react-router-dom';
import { Popover,  Icon } from 'antd-mobile';
import './index.scss';

const MySearchBar = (props) => (
  <div className = "m-search-bar">
      <div className = "left-search">
          <Link to = '/search' className="temp-search"><Icon type="search" className = "icon-search"/><span>搜索商品</span></Link>
      </div>
      <div className="right-menu">
            <Popover 
                  style={{
                    padding:'10px',
                    }}
                
                  overlayClassName = "fortest"
                  visible = {false}
                  overlay = {[
                    (<Popover.Item key={1} style={{
                      width:'200px',
                      lineHeight:'40px',
                      fontSize:'16px',
                      borderBottom:'1px solid #eee',
                      textAlign:'center'
                    }}><Link to="/">首页</Link></Popover.Item>),
                    (<Popover.Item key={2}><Link to="/Cart">购物车</Link></Popover.Item>)
                  ]}
                >
                  <div style={{
                    height:'100%',
                    padding:'0 15px',
                   
                    display:'flex',
                    alignItems:'center'
                  }}><Icon type="ellipsis"/></div>
          </Popover>
      </div>
  </div>
)

export default MySearchBar;