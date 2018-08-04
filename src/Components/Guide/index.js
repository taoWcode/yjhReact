/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-01 17:37:56
 * @version $Id$
 */

/*猜你喜欢组件*/
import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

const Guide = (props)=>(<div className = "m-guide-block">
							<h3 className = "guide-header">猜你喜欢<small>GUESS YOU LINK</small></h3>
							
							<div className="guide-goods-list">
								{props.guiData.map((item,idx)=>(
										<GoodsItem item={item} key={idx}/>
									)
								)}
								
							</div>			
						</div>);

const GoodsItem = (props)=>(<Link to="/" className="guide-goods-item">
									<div className="pic">
										<img src={props.item.imgUrl} alt={props.item.alt || 'goods'}/>
									</div>
									<div className = "info">
										<p className = "title s_overflow2">{props.item.title}</p>
										<p className = 'price'>&yen;&nbsp;{props.item.price}</p>
									</div>
								</Link>)
export default Guide;