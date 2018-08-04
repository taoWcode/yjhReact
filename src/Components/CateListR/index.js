/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-02 17:22:19
 * @version $Id$
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class CateList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			banner:null,
			cateList:[],
		};
	}
	componentDidMount(){
		console.log(this.props.match.params)
	}
	render(){
		return (
				<div className="m-category-list">

			<div className="cate-banner">
				<Link to="/" className="banner-link">
					<img src="https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%2031%402x.png" alt="goods"/>
				</Link>
			</div>

	
		
		
		<ul className = "category-list">
			
				<li >
					<Link to="/" className="link">
						<div className = "pic">
							<img src="https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E5%9B%BE%E5%B1%82%2046%402x.png" alt="goods"/>
						</div>
						<p className = 'cate-name s_overflow'>55555</p>
					</Link>
				</li>
			
		</ul>
		
		
	</div>
			)
	}
}

export default CateList;