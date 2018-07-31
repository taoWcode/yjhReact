/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-27 09:59:08
 * @version $Id$
 */
import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import Nav from '../../Components/Nav/index.js';
import Footer from '../../Components/common/Footer.js';


class Index extends React.Component{
	render(){
		return (<div className='g-index m-page fixed-bottom'>
					<Nav/>
					<Footer/>
				</div>);
	}
}

export default Index;