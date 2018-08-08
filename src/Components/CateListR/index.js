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
			cid:this.props.match.params.cid
		};
	}
	componentWillReceiveProps(nextProps){
		
		this.setState({
			banner:cateList[nextProps.match.params.cid].banner,
			cid:nextProps.match.params.cid,
			cateList:cateList[nextProps.match.params.cid].clist
		});

	}
	componentWillMount(){
		this.setState({
			banner:cateList[this.props.match.params.cid].banner,
			cid:this.props.match.params.cid ? 0 : this.props.match.params.cid,
			cateList:cateList[this.props.match.params.cid].clist
		})
	}
	componentDidMount(){
		
		
	}
	render(){
		return (
				<div className="m-category-list">
			
			<div className="cate-banner">
				<Link to={this.state.banner.tar} className="banner-link">
					<img src={this.state.banner.imgUrl} alt="goods"/>
				</Link>
			</div>

	
		
		
		<ul className = "category-list">
				{this.state.cateList.map((item, idx) => (
					<li key={idx}>
						<Link to={item.tar} className="link">
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
	}
}
const cateList = {
	'1':{
		banner:{
			tar:"/",
			imgUrl:"https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%2031%402x.png",
		},
		clist:[
			{
				tar:"/",
				imgUrl:"https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E5%9B%BE%E5%B1%82%2046%402x.png",
				s_cate_name:'手机'
			},
			{
				tar:"/",
				imgUrl:"https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E5%9B%BE%E5%B1%82%2046%402x.png",
				s_cate_name:'单反'
			}
		]
	},

	'0':{
		banner:{
			tar:"/",
			imgUrl:"https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%2031%402x.png",
		},
		clist:[
			{
				tar:"/",
				imgUrl:"https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E5%9B%BE%E5%B1%82%2046%402x.png",
				s_cate_name:'轰炸机'
			},
			{
				tar:"/",
				imgUrl:"https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E5%9B%BE%E5%B1%82%2046%402x.png",
				s_cate_name:'坦克'
			}
		]
	},
	'2':{
		banner:{
			tar:"/",
			imgUrl:"https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%2031%402x.png",
		},
		clist:[
			{
				tar:"/",
				imgUrl:"https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E5%9B%BE%E5%B1%82%2046%402x.png",
				s_cate_name:'防辐射'
			},
			{
				tar:"/",
				imgUrl:"https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E5%9B%BE%E5%B1%82%2046%402x.png",
				s_cate_name:'奶嘴'
			}
		]
	},
	'3':{
		banner:{
			tar:"/",
			imgUrl:"https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%2031%402x.png",
		},
		clist:[
			{
				tar:"/",
				imgUrl:"https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E5%9B%BE%E5%B1%82%2046%402x.png",
				s_cate_name:'图书'
			},
			{
				tar:"/",
				imgUrl:"https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E5%9B%BE%E5%B1%82%2046%402x.png",
				s_cate_name:'生鲜'
			}
		]
	}
}
export default CateList;