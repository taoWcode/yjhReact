/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-01 10:18:11
 * @version $Id$
 */
import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';


class RmdGoods extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		const _t = this,
		      _d = _t.props.rmdData;
		return (<div className="m-recommend-block">
					<h3 className="recommend-header">{_d.title}<small>{_d.title_english}</small></h3>
					<div className = "recommend-list">
						<div className="b-item">
							<Link to={_d.b_item.tar} className="nav-a">
								<img src={_d.b_item.imgUrl} alt={_d.b_item.alt || 'img'}/>
							</Link>
						</div>
						{
							_d.items.map((item,idx) => (
								idx<=4 && <div className='c-item' key={idx}>
									<Link to={item.tar} className="nav-a">
										<img src={item.imgUrl} alt={item.alt || 'img'}/>
									</Link>
								</div>
								))
						}
					</div>
					<div className = "m-single-banner">
						<Link to={_d.banner.tar} className="banner-a">
										<img src={_d.banner.imgUrl} alt={_d.banner.alt || 'banner'}/>
						</Link>
					</div>
				</div>)
	}

}

export default RmdGoods;