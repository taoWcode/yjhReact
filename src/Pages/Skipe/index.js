/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-27 10:02:50
 * @version $Id$
 */
import React from 'react';
import Footer from '../../Components/common/Footer';
import Header from '../../Components/common/Header';
class Skipe extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }
	render(){
		return (<div className='g-skipe m-page'>
            <Header title="秒杀" canBack = 'false'/>
            <div className="m-main"></div>
            <Footer history={this.props.history} sactive="Skipe"></Footer>
          </div>);
	}
}

export default Skipe;