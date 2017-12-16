
//tabs.js

import React from 'react';
import {
    View, Text,ListView
} from 'react-native';
import {SERVER} from 'init'
import Item from './item'
import s from './style'
const url = 'a'
const moduleList = [{
    label:'订单管理', icon:SERVER+'/b/workbench/order.png',isnew:'',jump:'Omanager'
},{
    label:'维权管理', icon:SERVER+'/b/workbench/protect.png',isnew:'',jump:'Pmanager'    
},{    			   
    label:'商品管理', icon:SERVER+'/b/workbench/items.png',isnew:'',jump:'ItemCategory'
},{			   
    label:'数据统计',icon:SERVER+'/b/workbench/statistics.png',isnew:'',jump:'Statitics'
},{			   
    label:'打理店铺',icon:SERVER+'/b/workbench/profit.png',isnew:'new',jump:'Renovate'
},{			   
    label:'分销商城',icon:SERVER+'/b/workbench/dispatch.png',isnew:'new',jump:'Store'
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
