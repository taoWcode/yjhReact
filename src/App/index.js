/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-26 18:11:40
 * @version $Id$
 */
import React from 'react';
import './index.scss';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Index from '../Pages/Index/index';
import Skipe from '../Pages/Skipe/index';
import Cart from '../Pages/Cart/index';
import Category from '../Pages/Category/index';
import User from '../Pages/User/index';
import Footer from '../Components/common/Footer.js';
export default class App extends React.Component{
	render(){
		return (
			<Router>
				<div className="yongjiuhui-app">
					<Footer/>
					<div className = 'm-footer-route'>
						<Route path="/" exact component={Index}/>
						<Route path="/Skipe" exact component={Skipe}/>
						<Route path="/Category" exact component={Category}/>
						<Route path="/Cart" exact component={Cart}/>
						<Route path="/User" exact component={User}/>
					</div>
				</div>
			</Router>
			)
	}
}
