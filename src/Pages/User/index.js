/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-27 10:08:28
 * @version $Id$
 */


import React from 'react';
import Footer from '../../Components/common/Footer';
import Header from '../../Components/common/Header';
class User extends React.Component{
	render(){
		return (<div className = 'g-user m-page'>
      <Header title="个人中心" canBack="0"/>
        <div className="m-main pt8">
          

        </div>
        <Footer history = {this.props.history} sactive="User"/>
    </div>)
	}
}

export default User;