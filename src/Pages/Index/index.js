/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-27 09:59:08
 * @version $Id$
 */
import React from 'react';
//import {Route, NavLink} from 'react-router-dom';
import Nav from '../../Components/Nav/index.js';
import Footer from '../../Components/common/Footer.js';
import RmdGoods from '../../Components/RmdGoods/index.js';
import Guide from '../../Components/Guide/index.js';

class Index extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			rmdData:[],
			guiData:[],
		}
	}

	componentDidMount(){
		this.setState({
			rmdData:tempRmdData,
			guiData:tempGuiData,
		})
	}

	render(){
	
		return (<div className='g-index m-page  bgf8'>
					<div className = 'm-main'>
						<Nav/>
							{
								this.state.rmdData.map((item,idx) => (
									<RmdGoods  key = {idx} rmdData = {item} />
									))
							}
							<Guide guiData={this.state.guiData} />
					</div>	
					<Footer history = {this.props.history} sactive="Index"/>
				</div>);
	}
}


const tempRmdData = [{
	title:"电子数码",
	title_english:'DIGITAL CAMERA',
	b_item:{
		tar:'/',
		imgUrl:'https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%2031%402x.png',
		name:'1',
		alt:'1'
	},
	items:[
		{
			tar:'/',
			imgUrl:'https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%2030%20%E6%8B%B7%E8%B4%9D2%402x.png',
			name:'1',
			alt:'1'
		},
		{
			tar:'/',
			imgUrl:'https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%2030%20%E6%8B%B7%E8%B4%9D%203%402x.png',
			name:'1',
			alt:'1'
		},
		{
			tar:'/',
			imgUrl:'https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%20302%402x.png',
			name:'1',
			alt:'1'
		},
		{
			tar:'/',
			imgUrl:'https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%20302%402x.png',
			name:'1',
			alt:'1'
		}
	],
	banner:{
		imgUrl:"https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%2031%402x.png",
		tar:'/',
		alt:'banner'
	}
},
{
	title:"美容美妆",
	title_english:'DIGITAL CAMERA',
	b_item:{
		tar:'/',
		imgUrl:'https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%20311%402x.png',
		name:'1',
		alt:'1'
	},
	items:[
		{
			tar:'/',
			imgUrl:'https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%2030%20%E6%8B%B7%E8%B4%9D2%402x.png',
			name:'1',
			alt:'1'
		},
		{
			tar:'/',
			imgUrl:'https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%2030%20%E6%8B%B7%E8%B4%9D%203%402x.png',
			name:'1',
			alt:'1'
		},
		{
			tar:'/',
			imgUrl:'https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%20302%402x.png',
			name:'1',
			alt:'1'
		},
		{
			tar:'/',
			imgUrl:'https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%20302%402x.png',
			name:'1',
			alt:'1'
		}
	],
	banner:{
		imgUrl:"https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E7%BB%84%2031%402x.png",
		tar:'/',
		alt:'banner'
	}
}];

const tempGuiData = [
	{
		tar:'/',
		imgUrl:'https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E5%9B%BE%E5%B1%82%2046%402x.png',
		alt:'goods',
		title:'旅行出国卡通箱套弹力空气层拉杆箱保护套耐脏箱罩户外旅游用品',
		price:199.00
	},
	{
		tar:'/',
		imgUrl:'https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E5%9B%BE%E5%B1%82%2046%402x.png',
		alt:'goods',
		title:'旅行出国卡通箱套弹力空气层拉杆箱保护套耐脏箱罩户外旅游用品',
		price:199.00
	},
	{
		tar:'/',
		imgUrl:'https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E5%9B%BE%E5%B1%82%2046%402x.png',
		alt:'goods',
		title:'旅行出国卡通箱套弹力空气层拉杆箱保护套耐脏箱罩户外旅游用品',
		price:199.00
	},
	{
		tar:'/',
		imgUrl:'https://raw.githubusercontent.com/taoWcode/junshop_img/master/images/%E5%9B%BE%E5%B1%82%2046%402x.png',
		alt:'goods',
		title:'旅行出国卡通箱套弹力空气层拉杆箱保护套耐脏箱罩户外旅游用品',
		price:199.00
	},
];
export default Index;