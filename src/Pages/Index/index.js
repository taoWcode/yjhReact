/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-27 09:59:08
 * @version $Id$
 */
import React from 'react';
import Nav from '../../Components/Nav/index.js';

class Index extends React.Component{
	render(){
		return (<div className='g-index m-page fixed-bottom'>
					<Nav/>
					首页
				</div>);
	}
}

export default Index;