/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-26 20:19:41
 * @version $Id$
 */
import React from 'react';
// import {NavLink, Link} from 'react-router-dom';
import { TabBar } from 'antd-mobile';

export default class Footer extends React.Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    const _t = this;
    return (
      <div className = "m-footer">
      <TabBar
      barTintColor = '#fff'
      tintColor = '#E9483B'
      unselectedTintColor = '#868686'
      >
        <TabBar.Item
          title="首页"
          selected = 'true'
          icon = {
            <i style = {{
              display:'block',
              width:'24px',
              height:'24px',
              background:'url('+ require('../../assets/icons/icon-home.png') +')',
              backgroundSize:'100% 100%'
            }}></i>
          }
          selectedIcon = {
            <i style = {{
              display:'block',
              width:'24px',
              height:'24px',
              background:'url('+ require('../../assets/icons/icon-home-a.png') +')',
              backgroundSize:'100% 100%'
            }}></i>
          }
          selected = {_t.props.sactive === 'Index' ? true : false}
          onPress = {() => {
            _t.props.history.push('/');
            }}
        ></TabBar.Item>
        <TabBar.Item
          title="秒杀"
          icon = {
            <i style = {{
              display:'block',
              width:'24px',
              height:'24px',
              background:'url('+ require('../../assets/icons/icon-group.png') +')',
              backgroundSize:'100% 100%'
            }}></i>
          }
          selectedIcon = {
            <i style = {{
              display:'block',
              width:'24px',
              height:'24px',
              background:'url('+ require('../../assets/icons/icon-group-a.png') +')',
              backgroundSize:'100% 100%'
            }}></i>
          }
          selected = {_t.props.sactive === 'Skipe' ? true : false}
          onPress = {() => {
            _t.props.history.push('/Skipe');
            }}
        ></TabBar.Item>
        <TabBar.Item
          title="分类"
          icon = {
            <i style = {{
              display:'block',
              width:'24px',
              height:'24px',
              background:'url('+ require('../../assets/icons/icon-category.png') +')',
              backgroundSize:'100% 100%'
            }}></i>
          }
          selectedIcon = {
            <i style = {{
              display:'block',
              width:'24px',
              height:'24px',
              background:'url('+ require('../../assets/icons/icon-category-a.png') +')',
              backgroundSize:'100% 100%'
            }}></i>
          }
          selected = {_t.props.sactive === 'Category' ? true : false}
          onPress = {() => {
            _t.props.history.push('/Category/0');
            }}
        ></TabBar.Item>
        <TabBar.Item
          title="购物车"
          icon = {
            <i style = {{
              display:'block',
              width:'24px',
              height:'24px',
              background:'url('+ require('../../assets/icons/icon-cart.png') +')',
              backgroundSize:'100% 100%'
            }}></i>
          }
          selectedIcon = {
            <i style = {{
              display:'block',
              width:'24px',
              height:'24px',
              background:'url('+ require('../../assets/icons/icon-cart-a.png') +')',
              backgroundSize:'100% 100%'
            }}></i>
          }
          selected = {_t.props.sactive === 'Cart' ? true : false}
          onPress = {() => {
            _t.props.history.push('/Cart');
          }}
        ></TabBar.Item>
        <TabBar.Item
          title="我的"
          icon = {
            <i style = {{
              display:'block',
              width:'24px',
              height:'24px',
              background:'url('+ require('../../assets/icons/icon-user.png') +')',
              backgroundSize:'100% 100%'
            }}></i>
          }
          selectedIcon = {
            <i style = {{
              display:'block',
              width:'24px',
              height:'24px',
              background:'url('+ require('../../assets/icons/icon-user-a.png') +')',
              backgroundSize:'100% 100%'
            }}></i>
          }
          selected = {_t.props.sactive === 'User' ? true : false}
          onPress = {() => {
            _t.props.history.push('/User');
            
            }}
        ></TabBar.Item>
      </TabBar>
      {/*
        <div className="u-footer-nav">

          <Link to="/" className="nav-item">
            <i>
              <img
                alt="首页"
                src={require ('../../assets/icons/icon-home.png')}
              />
            </i>
            <span>首页</span>
          </Link>
          <Link to="/Skipe" className="nav-item">
            <i>
              <img
                src={require ('../../assets/icons/icon-group.png')}
                alt="秒杀"
              />
            </i>
            <span>秒杀</span>
          </Link>
          <NavLink to="/Category/0" className="nav-item">
            <i>
              <img
                src={require ('../../assets/icons/icon-category.png')}
                alt="分类"
              />
            </i>
            <span>分类</span>
          </NavLink>
          <NavLink to="/Cart" className="nav-item">
            <i>
              <img
                src={require ('../../assets/icons/icon-cart.png')}
                alt="购物车"
              />
            </i>
            <span>购物车</span>
          </NavLink>
          <NavLink to="/User" className="nav-item">
            <i>
              <img
                src={require ('../../assets/icons/icon-user.png')}
                alt="我的"
              />
            </i>
            <span>我的</span>
          </NavLink>

        </div>
          */}
      </div>
    );
  }
}
