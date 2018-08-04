/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-27 11:38:19
 * @version $Id$
 */
import React from 'react';
import './index.scss';
import {Link } from 'react-router-dom';


class Nav extends React.Component{


	navigatorPage(url,params){

	}
	render(){
		const _t = this;
		return (
			<div className = "m-nav">
				<ul className='nav-list'>
				
					<li onClick = {_t.navigatorPage('1','1')}>
						<img alt="首页" src={require('../../assets/icons/icon-nav1.png')}/>
						<p className="s_overflow">首页</p>
					</li>
					<li onClick = {_t.navigatorPage('1','1')}>
						<img alt="秒杀" src={require('../../assets/icons/icon-nav2.png')}/>
						<p className="s_overflow">秒杀</p>
					</li>
					<li onClick = {_t.navigatorPage('1','1')}>
						<Link to="/category">
							<img alt="分类" src={require('../../assets/icons/icon-nav3.png')}/>
							<p className="s_overflow">分类</p>
						</Link>
					</li>
					<li onClick = {_t.navigatorPage('1','1')}>
						<img alt="购物车" src={require('../../assets/icons/icon-nav4.png')}/>
						<p className="s_overflow">购物车</p>
					</li>
					<li onClick = {_t.navigatorPage('1','1')}>
						<img alt="首页" src={require('../../assets/icons/icon-nav1.png')}/>
						<p className="s_overflow">首页</p>
					</li>
					<li onClick = {_t.navigatorPage('1','1')}>
						<img alt="秒杀" src={require('../../assets/icons/icon-nav2.png')}/>
						<p className="s_overflow">秒杀</p>
					</li>
					<li onClick = {_t.navigatorPage('1','1')}>
						<img alt="分类" src={require('../../assets/icons/icon-nav3.png')}/>
						<p className="s_overflow">分类</p>
					</li>
					<li onClick = {_t.navigatorPage('1','1')}>
						<img alt="购物车" src={require('../../assets/icons/icon-nav4.png')}/>
						<p className="s_overflow">购物车</p>
					</li>
					
				</ul>
			</div>
			)
	}
}
//导航的临时数据
// const temp_nav_data = [
// 	{
// 	  "imgUrl":"../../assets/icons/icon-nav1.png",
// 	  "name":"我的",
// 	  'imgAlt':'我的',
// 	  'path':'/user',
// 	  'component':'User'
// 	},
// 	{
// 	  "imgUrl":"../../assets/icons/icon-nav2.png",
// 	  "name":"秒杀",
// 	  'imgAlt':'秒杀',
// 	  'path':'/skipe',
// 	  'component':'Skipe'
// 	},
// 	{
// 	  "imgUrl":"../../assets/icons/icon-nav3.png",
// 	  "name":"分类",
// 	  'imgAlt':'分类',
// 	  'path':'/categroy',
// 	  'component':'Category'
// 	},
// 	{
// 	  "imgUrl":"../../assets/icons/icon-nav4.png",
// 	  "name":"购物车",
// 	  'imgAlt':'购物车',
// 	  'path':'/cart',
// 	  'component':'Cart'
// 	},
// ]


export default Nav;

