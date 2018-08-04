/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-01 20:20:55
 * @version $Id$
 */
import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

class CateTab extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		};
		
	}

	render(){
		const _t = this;
		return (<ul className="m-category-menu">

					{_t.props.tabData.map((item,idx) => (

							<li className="after_line" key={idx}>
								<NavLink className="menu-a s_oveflow" to={"/categoryR/" + item.cate_id} >{item.cate_name}</NavLink>
							</li>

						))}
					
				</ul>)
	}
}

export default CateTab;