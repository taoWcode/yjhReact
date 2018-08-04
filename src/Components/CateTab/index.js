/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-01 20:20:55
 * @version $Id$
 */
import React from 'react';
import './index.scss';

class CateTab extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		};
		this.tabCate = this.tabCate.bind(this);
	}
	tabCate(event){
		this.props.tabFun(event.target.getAttribute('data-cid'));
	}
	componentDidMount(){
		

	}
	render(){
		const _t = this;
		return (<ul className="m-category-menu">

					{this.props.tabData.map((item,idx) => (

							<li className="after_line" key={idx}>
								<span className="menu-a s_oveflow" onClick={_t.tabCate} data-cid ={item.cate_id} >{item.cate_name}</span>
							</li>

						))}
					
				</ul>)
	}
}

export default CateTab;