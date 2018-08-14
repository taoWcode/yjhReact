import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar, Toast } from 'antd-mobile';
import './index.scss';

export default class Search extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        searchValue:'',
        hotSearch:[],
        historySearch:[],
        isChange:false,
        mhdata:[],
        canRequestMH:true
      }

      this.submitSearch = this.submitSearch.bind(this);
      this.clearSearch = this.clearSearch.bind(this);
      this.inputBlur = this.inputBlur.bind(this);
      this.cancelSearch = this.cancelSearch.bind(this);
      this.inputChange = this.inputChange.bind(this);
      this.inputFocus = this.inputFocus.bind(this);
      this.clearHistory  = this.clearHistory.bind(this);
      this.changeHot = this.changeHot.bind(this);
    }

    submitSearch(value){

      if(value  === '' || value === undefined){
          Toast.info('请输入搜索相关内容', 1, null, true)
      }

      const historySearch = this.state.historySearch;
      const has = historySearch.findIndex((item) => (item === value));
      if(has === -1){
          historySearch.push(value);
          window.localStorage.setItem('jungo_history_search', JSON.stringify(historySearch));
      }

      this.props.history.replace('/');


    }
    clearSearch(e){}
    inputBlur(e){}
    cancelSearch(){
      this.props.history.goBack();
    }
    inputFocus(e){}
    inputChange(value){
      
      this.setState({
        searchValue:value,
        isChange:value.length > 0 ? true : false
      });

      //模拟相似搜索数据
      if(value.length > 0 && this.state.mhdata !== value){
        
        this.setState({
          mhdata:tempMH
        })
      }

    }
    //清除历史记录
    clearHistory(){
      window.localStorage.setItem('jugo_search_history',JSON.stringify([]));
      this.setState({
        historySearch:[]
      })
    }
    //换热门搜索
    changeHot(){
       this.setState({
         hotSearch:['张家辉','渣渣辉','古天乐','刘青云','陈小春']
       })
    }
    componentDidMount(){
     
      //本地获取历史搜索记录
      const historySearch = window.localStorage.getItem('jungo_search_history');
      if(historySearch && JSON.parse(historySearch).length > 0){
          this.setState({
            historySearch:JSON.parse(historySearch)
          })
      }

      //异步获取热门搜索记录
      this.setState({
        hotSearch:tempHot
      })
      
    }

    render(){
      return (
        <div className="g-search m-page">
          <div className="m-search-box">
              <SearchBar
                value = {this.state.searchValue}
                placeholder = "请输入想找的商品名称"
                showCancelButton
                onSubmit = { this.submitSearch }
                onClear = { this.clearSearch }
                onBlur = { this.inputBlur }
                onCancel = { this.cancelSearch }
                onChange = { this.inputChange }
                onFocus = { this.inputFocus }
              />
          </div>
          { (!this.state.isChange &&this.state.historySearch.length > 0) && (<HistorySearch 
                                                        ldata={this.state.historySearch} 
                                                        clear = {this.clearHistory}/>) }
          { (!this.state.isChange && this.state.hotSearch.length > 0) && (<HotSearch 
                                                   ldata={this.state.hotSearch}
                                                   change = { this.changeHot }
                                                   />) }
          {this.state.isChange && (<MHSearch mhdata = {this.state.mhdata}/>)}
          
        </div>
      );

    }
}

const HistorySearch = (props) => (
  <div className = "m-search-history">
    <div className="header-part">
      <b className = 'title'>历史搜索</b>
      <span className="btn-clear" onClick = {props.clear}>清除历史</span>
    </div>
    <div className="body-part">
      <ul className="search-list">
          { props.ldata.map((item,idx) => (
            <li key = {idx}>
              <Link className="link" to="/">{item}</Link>
            </li>
          )) }
         
      </ul>
    </div>
  </div>
)

const HotSearch = (props) => (
  <div className = "m-search-history">
    <div className="header-part">
      <b className = 'title'>热门搜索</b>
      <span className="btn-clear" onClick = {props.change}>换一批</span>
    </div>
    <div className="body-part">
      <ul className="search-list">
      { props.ldata.map((item,idx) => (
            <li key = {idx}>
              <Link className="link" to="/">{item}</Link>
            </li>
          )) }
      </ul>
    </div>
  </div>
)

const MHSearch = (props) => (
  <ul className = 'm-mh-search'>
      {props.mhdata.map((item, idx) => (
        <li key={idx} data-keyword = {item} onClick = {props.search}>{item}</li>
      ))}
  </ul>
)

const tempMH = ['水杯','水浴','漱口水','水壶','热水器','保湿水']
const tempHistory = ['iphone','雨伞','巧克力','鲜活螃蟹','蛋糕'];
const tempHot = ['香水','小龙虾','手表','马伊琍','文章','香水','小龙虾','手表','马伊琍','文章','香水','小龙虾','手表','马伊琍','文章'];
window.localStorage.setItem('jungo_search_history',JSON.stringify(tempHistory));