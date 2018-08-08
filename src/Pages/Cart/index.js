/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-27 10:05:04
 * @version $Id$
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../../Components/common/Footer';
import Header from '../../Components/common/Header';
import { PullToRefresh } from 'antd-mobile';

class Cart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      refreshing:false,//是否显示刷新状态
      down:true,//刷新方向为下拉刷新
      //height:document.documentElement.clientHeight,//获取根节点的高度
      height:0,
      data:[]
    };
  }

  componentDidMount() {
    const hei = ReactDOM.findDOMNode(this.refs.mainBox).clientHeight - ReactDOM.findDOMNode(this.refs.pr).offsetTop;
    setTimeout(() =>{
      this.setState({
        height:hei,
        data:genData(),
      })
    },100)
  }

	render(){
		return (<div className = 'g-cart m-page'>
      <Header title="购物车" canBack="1"/>
        <div className="m-main pt8" ref="mainBox">
            <PullToRefresh
            damping = {60}
            ref = "pr"
            style = {{
              height:this.state.height,
              oveflow:'auto'
            }}
            indicator = {{deactivate:'上拉可刷新'}}
            direction = 'down'
            refreshing = {this.state.refreshing}
            onRefresh = {() => {
              this.setState({refreshing:true});
              setTimeout(() => {
                this.setState({refreshing:false})
              }, 1000);
            }}
            >
            {this.state.data.map((item,idx) =>(
              <div key={idx} style = {{textAlign:'center',height:'80px'}}>
                {item}
              </div>
            ))}

            </PullToRefresh>
        </div>
        <Footer history = {this.props.history} sactive="Cart"/>
    </div>)
	}
}

function genData(){
  const dataAttr = [];
  for(let i = 0; i < 20; i++){
     dataAttr.push(i);
  }
  return dataAttr;
}

export default Cart;