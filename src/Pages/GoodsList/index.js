import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Header from '../../Components/common/Header';
import TempDiv from '../../Components/common/TempDiv';
import SortTab from './sortTab';
import Filter from './filter';
import List from '../../Components/GoodsList/index';

class GoodsList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sort:'',
      empty:false,
      showFilter:false,
      fdata:[]
    }
    this.goodsSort = this.goodsSort.bind(this);
    this.showFilter = this.showFilter.bind(this);
  }
  goodsSort(e){
      var tar = e.target;
      const type = tar.getAttribute('data-type');
      this.setState({
        sort:type
      })
  }
  //筛选框弹出
  showFilter(){
    this.setState((prevState) => ({
      showFilter:!prevState.showFilter
    }))
  }
  componentDidMount(){
    this.setState({
      fdata:fdata
    })
  }
  render(){
    return (<div className="g-goodslist m-page">
              <Header title="商品列表" canBack = "1"/>
              <SortTab sort = {this.state.sort} goodsSort = {this.goodsSort} showFilter = {this.showFilter}/>
              <div className="m-main">
                <List/>
              </div>
              <Filter 
                show={this.state.showFilter} 
                showFilter = {this.showFilter}
                fdata = {this.state.fdata}
                />
            </div>)
  }
}

export default GoodsList;

const fdata = [
  {
    id:'1',
    name:'内存',
    children:[
      {
        cid:'1',
        name:'2G'
      },
      {
        cid:'2',
        name:'4G'
      },
      {
        cid:'3',
        name:'8G'
      },
      {
        cid:'4',
        name:'16G'
      }
    ]
  },
  {
    id:'2',
    name:'颜色',
    children:[
      {
        cid:'1',
        name:'红色'
      },
      {
        cid:'2',
        name:'蓝色'
      },
      {
        cid:'3',
        name:'紫色'
      },
      {
        cid:'4',
        name:'金色'
      }
    ]
  }
]