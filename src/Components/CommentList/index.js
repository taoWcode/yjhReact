import React from 'react';
import './index.scss';

export default class CommentList extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <div className="m-comment-list">
      <div className="comment-item">
        <div className="header">
            <div className="avatar">
              <img src="https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png" alt=""/>
            </div>
            <div className="name">小猪佩奇的mother</div>
            <div className="score">
              <i className="yes"></i>
              <i className="yes"></i>
              <i className="yes"></i>
              <i className="yes"></i>
              <i className="yes"></i>
            </div>
            <div className="date">2018.3.20</div>
        </div>
        <div className="body">
            <p className="comment-word">买了两件，黑色的没拍照片，不过白色嗯穿上去真的是很好看,料子很好，很舒服</p>
            <div className="img-list">
                <img src="https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png" alt=""/>
                <img src="https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png" alt=""/>
            </div>
            <p className="params">颜色:圆领-白色 尺码:均码</p>
        </div>
      </div>
    </div>
    )
  }

}