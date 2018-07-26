/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-26 20:19:41
 * @version $Id$
 */
import React from 'react';
import { NavLink } from 'react-router-dom'
export default class Footer extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		return (<div className = "m-footer">
					<div class="u-footer-nav">
						
							<NavLink to="/" exact>
								<i>
									<img src=""/>
								</i>
								<span></span>
							</NavLink>
						
					</div>
				</div>)
	}
}
