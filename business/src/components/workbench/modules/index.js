
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
    label:'订单管理', icon:require('./icon/order.png'),isnew:'',jump:'Omanager'
},{
    label:'维权管理', icon:require('./icon/protect.png'),isnew:'',jump:'Pmanager'    
},{    			   
    label:'商品管理', icon:require('./icon/items.png'),isnew:'',jump:'ItemCategory'
},{			   
    label:'数据统计',icon:require('./icon/statistics.png'),isnew:'',jump:'Statitics'
},{			   
    label:'打理店铺',icon:require('./icon/profit.png'),isnew:'new',jump:'Renovate'
},{			   
    label:'分销商城',icon:require('./icon/dispatch.png'),isnew:'new',jump:'Store'
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
