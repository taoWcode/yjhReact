/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-26 18:11:40
 * @version $Id$
 */
import React from 'react';
import './index.scss';
import { BrowserRouter as Router} from 'react-router-dom';
import MyRouter from '../Router/index';

export default class App extends React.Component{
	render(){
		return (
			<Router>
				<div className="yongjiuhui-app">
					
					<MyRouter/>
				</div>

			</Router>
			)
	}
}
