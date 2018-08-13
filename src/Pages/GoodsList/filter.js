import React from 'react';
import { Button, Icon } from 'antd-mobile'

class FilterBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedStr:[],
      fdata:[],
      adata:[]
    }
    this.selectAttr = this.selectAttr.bind(this);
    this.resetAttr = this.resetAttr.bind(this);
    this.cancelAttr = this.cancelAttr.bind(this);
    this.submitAttr = this.submitAttr.bind(this);
  }

  //取消选择
  cancelAttr(e){
      const tar = e.target,
            fid = tar.getAttribute('data-fid');
      const selectedList =this.state.selectedStr,
            list = this.state.fdata;
      let len = selectedList.length,
          listLen = list.length;
      for(let i = 0; i < len; i++){
          if(selectedList[i].fid === fid){
            selectedList.splice(i,1);
            len = len - i - 1;
          }
      }

      for (let j = 0; j < listLen; j++) {
          if(list[j].id === fid){
            
            list[j].selected = '0';
            listLen = listLen - j -1;
          }
      }
      this.setState({
        selectedStr:selectedList,
        fdata:list
      })
  }
  submitAttr(){
     console.log("确定提交");
     console.log(this.state.selectedStr);
     this.props.showFilter();
  }
  //重置属性
  resetAttr(){
   
      this.setState({
        selectedStr:[],
        fdata:[...this.state.adata]
      })
  }
  //选择属性
  selectAttr(e){
    const tar = e.target,
          name = tar.getAttribute('data-name'),
          cid = tar.getAttribute('data-cid'),
          fname = tar.getAttribute('data-fname'),
          fid = tar.getAttribute('data-fid');
    const selectedItem = {};
    selectedItem.fname = fname;
    selectedItem.name = name;
    selectedItem.cid = cid;
    selectedItem.fid = fid;

    const list = this.state.fdata,
          selectedStr = this.state.selectedStr;
    selectedStr.push(selectedItem);
    let len = list.length;
   
    for(let i = 0; i < len; i++){
        if(list[i].id === fid) {
        //  list.splice(i,1);
          list[i].selected = '1';
          len = len - (i+1);
        }
    }
    this.setState({
      selectedStr:selectedStr,
      fdata:list
    })

  }

  componentWillReceiveProps(nextProps){
    this.setState({
      fdata:[...nextProps.fdata],
      adata:[...nextProps.fdata]
    })
  }
  render(){
    return(<div className={this.props.show ? 'm-filter-box show' : 'm-filter-box' }>
    <span className="m-mask-layer"></span>
    <div className="filter-content">
      { this.state.selectedStr.length > 0 && (<div className="filter-header after_line">
          <div className="selected-box">
            已选择：{this.state.selectedStr.map((item,idx) => (
              <span 
                className="selected-item" 
                key={idx} 
                data-fid = {item.fid}
                onClick = {this.cancelAttr}
                >{item.fname}{item.name}<Icon type="cross-circle" size="xxs" className="icon-close" data-fid = {item.fid} onClick = {this.cancelAttr}/>
              </span>
            ))}
          </div>
      </div>)}
      <div className="filter-body">
         
          {  this.state.fdata.map((item,idx)=>{
            if(item.selected !== '1'){
            return(
              <dl className="filter-item" key={idx}>
                <dt>{item.name}</dt>
                <dd>
                {
                  item.children.map((value,itx) => (
                    <span 
                      className="c-item" 
                      key={itx} 
                      data-name={value.name}
                      data-fname = {item.name}
                      data-cid={value.cid} 
                      data-fid={item.id}
                      onClick={this.selectAttr}
                      >{value.name}</span>
                  ))
                 
                  
                }
                  
                </dd>
              </dl>
            ) }})
          }
         
      </div>
      <div className="filter-footer">
        <Button size="small" className="btn-cancel my-btn" onClick = {this.props.showFilter}>取消</Button>
        <Button size="small" className="btn-reset  my-btn" onClick = {this.resetAttr}>重置</Button>
        <Button size="small" className="btn-sure  my-btn" onClick = {this.submitAttr}>确定</Button>
      </div>
      </div>
    </div>)
    
  }
}



export default FilterBox;