import React from 'react';


import s from './style.js'
import Item from './item'
import {
    View, Image, Text,ListView,TouchableOpacity,ScrollView,Alert
} from 'react-native';


const infortg = [{
    label:'姓名',extra:'草市集'
},{
    label:'昵称',extra:''
}]
const setrtg = [{
    label:'消息设置',extra:''
},{
    label:'清空缓存',extra:'1.0M'
}]
const prortg = [{
    label:'关于草市集',extra:''
},{
    label:'意见反馈',extra:''
},{
    label:'举报电话',extra:''
}]

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const infortgs = ds.cloneWithRows(infortg)
const setrtgs = ds.cloneWithRows(setrtg)
const prortgs = ds.cloneWithRows(prortg)

const Mine = ({logOut}) => (
	<ScrollView style={s.ctnr}>
	<View style={s.sctnr} >
	<Image style={s.shop} source={require('./logo.png')}/>
	<Text style={s.tf}>草市集</Text>
	</View>	
	<View style={s.rtgbg}><View style={s.actnr} >
	<Text style={s.tf}>头像</Text>	
	<Image style={s.shop} source={require('./logo.png')}/>
	</View>
        <ListView
    scrollEnabled={false} dataSource={infortgs}
    renderRow={(rowData) => <Item info={rowData}/>}
    contentContainerStyle={s.listViewStyle}
    removeClippedSubviews={false}
        /></View>
	
	<View style={s.rtgbg}>
        <ListView
    scrollEnabled={false} dataSource={setrtgs}
    renderRow={(rowData) => <Item info={rowData}/>}
    contentContainerStyle={s.listViewStyle}
    removeClippedSubviews={false}
        /></View>

    	<View style={s.rtgbg}>
        <ListView
    scrollEnabled={false} dataSource={prortgs}
    renderRow={(rowData) => <Item info={rowData}/>}
    contentContainerStyle={s.listViewStyle}
    removeClippedSubviews={false}
        /></View>
	
	<TouchableOpacity style={s.btn} onPress={()=>logOut()}>
	<Text style={s.btnf}>退出登录</Text>
	</TouchableOpacity>
    </ScrollView>
);

export default Mine
