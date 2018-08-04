/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-27 10:07:04
 * @version $Id$
 */

import React from 'react';
import './index.scss';
import {Route} from 'react-router-dom';
import Footer from '../../Components/common/Footer.js';
import CateTab from '../../Components/CateTabR/index.js';
import CateList from '../../Components/CateListR/index.js';

class Category extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			cate_id:this.props.match.params.cate_id || 0,
			tabData:tempTabCate,
			s_cate_data:[],
			word:'哈哈'
		};
		this.tabCategory = this.tabCategory.bind(this);
	}

	tabCategory(cate_id){
		this.setState(prevdata => ({
			s_cate_data:cateList[prevdata.cate_id],
			cate_id:cate_id
		}))
		
	}
	componentDidMount(){
		this.setState(prevdata => ({
			s_cate_data:cateList[prevdata.cate_id],
		}))

	}
	
	render(){
		return (<div className = 'g-category m-page bgf8'>
					<div className="m-main fixed-top fixed-bottom">
						<div className="left-side">
							<CateTab tabFun = {this.tabCategory.bind(this)} tabData={this.state.tabData}/>
						</div>
						<div className="right-side">
							{/*<CateList cateList={this.state.s_cate_data}/>*/}
							<Route path="/categoryR/:cid" component={CateList}/>
						</div>
						
					</div>
					<Footer/>
				</div>)
	}
}

const tempTabCate = [
	{
		cate_id:'1',
		cate_name:'推荐分类'
	},
	{
		cate_id:'2',
		cate_name:'移动数码'
	},
	{
		cate_id:'3',
		cate_name:'母婴产品'
	},
]
const cateList = {
	'2':{
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
	'3':{
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
	'1':{
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
export default Category;