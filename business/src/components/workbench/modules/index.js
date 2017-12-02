
//tabs.js

import React from 'react';
import {
    View, Text,ListView
} from 'react-native';

import Item from './item'
import s from './style'
import {url} from '../../../global'

const moduleList = [{
    label:'订单管理', icon:url+'/b/workbench/order.png',isnew:''
},{
    label:'商品管理', icon:url+'/b/workbench/items.png',isnew:''
},{
    label:'数据统计',icon:url+'/b/workbench/statistics.png',isnew:''
},{
    label:'维权管理', icon:url+'/b/workbench/protect.png',isnew:''    
},{
    label:'分销商城',icon:url+'/b/workbench/dispatch.png',isnew:'new'
}]
		    
  

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const dsource = ds.cloneWithRows(moduleList)

const Modules = () => (
	<View style={s.ctnr}>
	<ListView
    scrollEnabled={false}
    dataSource={dsource}
    renderRow={(rowData) => <Item info={rowData}/>}
    contentContainerStyle={s.listViewStyle}
    removeClippedSubviews={false}
	/>
	</View>
);

export default Modules
