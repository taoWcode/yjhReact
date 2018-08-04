/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-26 20:19:41
 * @version $Id$
 */
import React from 'react';
import { NavLink,Link } from 'react-router-dom';


export default class Footer extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		return (<div className = "m-footer">
				
					<div className="u-footer-nav">
						
							<Link to="/"  className="nav-item">
								<i>
									<img alt='首页' src={ require('../../assets/icons/icon-home.png') }/>
								</i>
								<span>首页</span>
							</Link>
							<Link to="/Skipe"  className="nav-item">
								<i>
									<img src={ require('../../assets/icons/icon-group.png') } alt='秒杀' />
								</i>
								<span>秒杀</span>
							</Link>
							<NavLink to="/CategoryR"  className="nav-item">
								<i>
									<img src={ require('../../assets/icons/icon-category.png') } alt='分类'/>
								</i>
								<span>分类</span>
							</NavLink>
							<NavLink to="/Cart"  className="nav-item">
								<i>
									<img src={ require('../../assets/icons/icon-cart.png') } alt='购物车'/>
								</i>
								<span>购物车</span>
							</NavLink>
							<NavLink to="/User"  className="nav-item">
								<i>
									<img src={ require('../../assets/icons/icon-user.png') } alt='我的'/>
								</i>
								<span>我的</span>
							</NavLink>
						
					</div>
					
				

				</div>)
	}
}
