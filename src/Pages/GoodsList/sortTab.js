import React from 'react';


const SortTab = (props) => (
  <ul className = 'm-sort-tab'>
    <li className={props.sort === 'zh' ? 'sort-item s-active':'sort-item'} data-type = 'zh' onClick = {props.goodsSort}>综合<i className="desc"></i></li>
    <li className={props.sort === 'xl' ? 'sort-item s-active':'sort-item'} data-type = 'xl'>销量<i className="desc"></i></li>
    <li className={props.sort === 'price' ? 'sort-item s-active':'sort-item'} data-type = 'price'>价格<i className="desc"></i></li>
    <li className='sort-item' onClick={ props.showFilter }>筛选</li>
  </ul>
)

export default SortTab;