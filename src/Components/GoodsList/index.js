import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { ListView } from 'antd-mobile';
import './index.scss';


const MyBody  = (props) => (
  <div className = 'm-goods-list my-body'>
    {props.children}
  </div>
)

let tempData = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒1',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒2',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒3',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒4',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒5',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒6',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒7',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒8',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒9',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒10',
  },
];
let data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒1',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒2',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒3',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒4',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒5',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒6',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒7',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒8',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒9',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒10',
  },
];
const NUM_SECTIONS = 5,
      NUM_ROWS_PER_SECTION = 2;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];

//作用生效新的dataBlobs sectionIDs rowIDs
function genData(pIndex = 0){
  for (let i = 0; i < NUM_SECTIONS; i++){
      const ii = (pIndex * NUM_SECTIONS) + i;
      const sectionName = `Section ${ii}`;
      sectionIDs.push(sectionName);//['Section 0','Section 1','Section 2',...'Section 4']
      dataBlobs[sectionName] = sectionName;//{'Section 0':'Section 0'}
      rowIDs[ii] = [];
      for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
        const rowName = `S${ii}, R${jj}`;
        rowIDs[ii].push(rowName);//[ ['S0 R0','S0,R1',...,'S0 R4'],['S1 R0',...,'S1 R4'],...,['S4 R0',...,'S4 R4'] ]
        dataBlobs[rowName] = rowName;//{'Section 0': 'Section 0', 'S0 R0':'S0 R0', 'S0 R1':'S0 R1',...}
      }
    }

    sectionIDs = [...sectionIDs];
    rowIDs = [...rowIDs];
    
}


class GoodsList extends React.Component{
  constructor(props){
    super(props);

    const getSectionData = (dataBlob,sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob,sectionID,rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData:getRowData, //主体内容数据 <=> getRowData:getRowData
      getSectionHeaderData:getSectionData,//头部内容
      rowHasChanged:(row1,row2) => row1 !== row2,//对比两个row，通过返回的boolean是否更新Row
      sectionHeaderHasChanged:(s1, s2) => s1 !== s2 //对比两个头部数据。通过返回 boolean 是否更新头部
    })
  
    this.state = {
      NUM_SECTIONS:5,
      NUM_ROWS_PER_SECTION:2,
      dataBlobs:{},
      sectionIDs:[],
      rowIDs:[],
      pIndex:0,
      dataSource,
      isLoading:true,
      height:document.documentElement.clientHeight * 3 / 4,
    }
    this.onEndReached = this.onEndReached.bind(this);
    this.genData = this.genData.bind(this);

  }

  genData(){
    const _t = this;
    const _ts = this.state;
    for (let i = 0; i < _ts.NUM_SECTIONS; i++){
      const ii = (_ts.pIndex * _ts.NUM_SECTIONS) + i;
      const sectionName = `Section ${ii}`;
      _ts.sectionIDs.push(sectionName);//['Section 0','Section 1','Section 2',...'Section 4']
      _ts.dataBlobs[sectionName] = sectionName;//{'Section 0':'Section 0'}
      _ts.rowIDs[ii] = [];
      for (let jj = 0; jj < _ts.NUM_ROWS_PER_SECTION; jj++) {
        const rowName = `S${ii}, R${jj}`;
        _ts.rowIDs[ii].push(rowName);//[ ['S0 R0','S0,R1',...,'S0 R4'],['S1 R0',...,'S1 R4'],...,['S4 R0',...,'S4 R4'] ]
        _ts.dataBlobs[rowName] = rowName;//{'Section 0': 'Section 0', 'S0 R0':'S0 R0', 'S0 R1':'S0 R1',...}
      }
    }
   
    this.setState({
      sectionIDs:_ts.sectionIDs,
      rowIDs:_ts.rowIDs,
      pIndex:++_ts.pIndex
    });
  }

  onEndReached(){

    const _t = this;
    if (this.state.isLoading && !this.state.hasMore){
      return;
    }
    data = [...data,...tempData];
    console.log('触发');
    this.setState({
      isLoading:true
    });

    setTimeout(() => {
      
      _t.genData();
      this.setState({
        dataSource:this.state.dataSource.cloneWithRowsAndSections(_t.state.dataBlobs,_t.state.sectionIDs,_t.state.rowIDs),
        isLoading:false
      })
    },1000)
  }

  componentDidMount(){
    const _t = this;
    const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.refs.lv).offsetTop;
    setTimeout(()=>{
      _t.genData();
      _t.setState({
        dataSource:_t.state.dataSource.cloneWithRowsAndSections(_t.state.dataBlobs, _t.state.sectionIDs, _t.state.rowIDs),
        isLoading:false,
        height:hei
      })
    }, 600)
  }

  render(){
    
    let index =data.length - 10;
    const row = (rowData, sectionID, rowID) => {
     
      if (index > data.length - 1) {
        return;
        index = 0;
      }
      const obj = data[index++];
      return (
        <div className="goods-item" key={rowID}>
          <Link to="/" className="link">
            <div className="pic">
              <img src={ obj.img } alt=""/>
            </div>
            <div className="info">
              <p className="title s_overflow2">{ obj.title }</p>
              <p className="info-bottom">
                <span className="shop-price">&yen;&nbsp;100.00</span>
                <span className="saled">已付款：7689</span>
              </p>
            </div>
          </Link>
        </div>
        
      )
    }
    return (
      <ListView
      ref = 'lv'
      dataSource = {this.state.dataSource}
      renderFooter = { () => (<div style={{padding:'10px',textAlign:'center'}}>
        { this.state.isLoading ? 'Loading...' : '' }
      </div>) }
    
      renderBodyComponent = {() => <MyBody/>}
      renderRow = {row}
      style = {{
        height:this.state.height,
        overflow:'auto'
      }}
      pageSize = {4} //每次渲染四条数据
      scrollRenderAheaderDistance = {1000}
      onEndReached = {this.onEndReached}
      onEndReachedThreshold = {150}
      >
        
      </ListView>
    )
  }
}


export default GoodsList;