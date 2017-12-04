
//tabs.js

import React from 'react';
import {
    View, Text,ListView
} from 'react-native';

import Item from './item'
import s from './style'
import {url} from '../../../global'

const moduleList = [{
    label:'订单管理', icon:url+'/b/workbench/order.png',isnew:'',jump:'Omanager'
},{
    label:'维权管理', icon:url+'/b/workbench/protect.png',isnew:'',jump:'Pmanager'    
},{    
    label:'商品管理', icon:url+'/b/workbench/items.png',isnew:'',jump:'Imanager'
},{
    label:'数据统计',icon:url+'/b/workbench/statistics.png',isnew:'',jump:'Statitics'
},{
    label:'打理店铺',icon:url+'/b/workbench/shop.png',isnew:'new'
},{
    label:'分销商城',icon:url+'/b/workbench/dispatch.png',isnew:'new'
}]
		    
  

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const dsource = ds.cloneWithRows(moduleList)

const Modules = ({navigate}) => (
	<View style={s.ctnr}>
	<ListView
    scrollEnabled={false}
    dataSource={dsource}
    renderRow={(rowData) => <Item info={rowData} navigate={navigate}/>}
    contentContainerStyle={s.listViewStyle}
    removeClippedSubviews={false}
	/>
	</View>
);

export default Modules
