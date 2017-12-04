import React from 'react';


import s from './style.js'
import Item from './item'
import {
    View,ListView,StatusBar
} from 'react-native';


const rtg = [{
    label:'营收统计',content:'近7日营收',sum:'￥0.00'
},{
    label:'订单统计',content:'近7日订单数',sum:'0',
},{
    label:'流量统计',content:'今日访客数',sum:'0',
},{
    label:'客户统计',content:'昨日新增粉丝数',sum:'0',
}]


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const rtgs = ds.cloneWithRows(rtg)


const Statitics = () => (
	<View >
	<StatusBar barStyle="dark-content" />
        <ListView
    scrollEnabled={false}
    dataSource={rtgs}
    renderRow={(rowData) => <Item info={rowData}/>}
    contentContainerStyle={s.listViewStyle}
    removeClippedSubviews={false}
        />
    </View>
);

export default Statitics
