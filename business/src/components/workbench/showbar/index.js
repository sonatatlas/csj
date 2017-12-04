
//tabs.js

import React from 'react';
import {
    View, Text,ListView,
} from 'react-native';

import Item from './item'
import s from './style'

const moduleList = [{
    label:'待发货订单',count:0, jump:'Omanager'
},{
    label:'待维权订单', count:0, jump:'Pmanager'
},{
    label:'已告罄商品',count:798, jump:'Imanager'
}]

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const dsource = ds.cloneWithRows(moduleList)


const ShowBar = ({navigate}) => (
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

export default ShowBar
