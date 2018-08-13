import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { ListView } from 'antd-mobile';


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
      dataSource,
      isLoading:true,
      height:document.documentElement.clientHeight * 3 / 4,
    }
    this.onEndReached = this.onEndReached.bind(this);

  }

  onEndReached(){
    if (this.state.isLoading && !this.state.hasMore){
      return;
    }
    data = [...data,...tempData];

    this.setState({
      isLoading:true
    });

    setTimeout(() => {
      genData(++pageIndex);
      this.setState({
        dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlobs,sectionIDs,rowIDs),
        isLoading:false
      })
    },1000)
  }

  componentDidMount(){
    const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.refs.lv).offsetTop - 50;
    setTimeout(()=>{
      genData();
    
      this.setState({
        dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading:false,
        height:hei
      })
    }, 600)
  }

  render(){
    const separator = (sectionID, rowID) => (
      <div
        key = {`${sectionID}-${rowID}`}
        style = {{
          backgroundColor: '#f5f5f9',
          height:8,
          borderTop:'1px solid #ececed',
          borderBottom:'1px solid #ececed'
        }}
      >
      </div>
    );

    let index =data.length - 10;
    const row = (rowData, sectionID, rowID) => {
     
      if (index > data.length - 1) {
        return;
        index = 0;
      }
      const obj = data[index++];
      return (
        <div key = {rowID} style={{padding: '0 15px'}}>
          <div 
            style = {{
              lineHeight: '50px',
              color:'#888',
              fontSize:'18',
              borderBottom: '1px solid #f6f6f6'
            }}
          >{obj.title}</div>
          <div style = {{
            display: 'flex',
            padding: '15px 0',
          }}>
            <img style={{
              height: '64px',
              marginRight: '15px'
            }}
              src = {obj.img}
              alt = ''
            />
            <div style={{lineHeight:1}}>
              <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
                {obj.des}
              </div>
              <div>
                <span style={{fontSize: '30px', color: '#ff6E27'}}>35</span>&yen; {rowID}
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <ListView
      ref = 'lv'
      dataSource = {this.state.dataSource}
      
      renderFooter = { () => (<div style={{padding:'30px',textAlign:'center'}}>
        { this.state.isLoading ? 'Loading...' : 'Loaded' }
      </div>) }
    
      renderBodyComponent = {() => <MyBody/>}
      renderRow = {row}
      renderSeparator = {separator}
      style = {{
        height:this.state.height,
        overflow:'auto'
      }}
      pageSize = {4} //每次渲染四条数据
      scrollRenderAheaderDistance = {500}
      onEndReached = {this.onEndReached}
      onEndReachedThreshold = {10}
      >
        
      </ListView>
    )
  }
}


export default GoodsList;