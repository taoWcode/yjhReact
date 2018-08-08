/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-01 09:46:53
 * @version $Id$
 */

import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Index from '../Pages/Index/index';
import Cart from '../Pages/Cart/index';
import Skipe from '../Pages/Skipe/index';
import Category from '../Pages/Category/index';
import CategoryR from '../Pages/CategoryR/index';
import User from '../Pages/User/index';
import PageError from '../Pages/Error/index';
const myRouter = ()=>{
	return (
		<Switch>
			<Route path="/" exact component = {Index}/>
			<Route path="/category/:cid" component = {Category}/>
			<Route path="/categoryR" component = {CategoryR}/>
			<Route path="/user"  component = {User}/>
			<Route path="/skipe" component = {Skipe}/>
			<Route path="/cart" component = {Cart}/>
			<Route path="*" component={PageError}/>
		</Switch>
		)
}

export default myRouter;