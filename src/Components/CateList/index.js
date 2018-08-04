/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-02 17:22:19
 * @version $Id$
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const CateList = (props) => (
	<div className="m-category-list">

		{(props.cateList.banner !== '') && (props.cateList.banner!== undefined) && (

			<div className="cate-banner">
				<Link to={props.cateList.banner.tar} className="banner-link">
					<img src={props.cateList.banner.imgUrl} alt="goods"/>
				</Link>
			</div>

		) }
		
		
		<ul className = "category-list">
			{(props.cateList.clist !== '') && (props.cateList.clist!== undefined) &&props.cateList.clist.map((item,idx) => (
				<li key={idx}>
					<Link to="item.tar" className="link">
						<div className = "pic">
							<img src={item.imgUrl} alt="goods"/>
						</div>
						<p className = 'cate-name s_overflow'>{item.s_cate_name}</p>
					</Link>
				</li>
			))}
			
		</ul>
		
		
	</div>
	) 

export default CateList;