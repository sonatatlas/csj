
//tabs.js

import React from 'react';
import {
    View, Text, TouchableOpacity, Image, ScrollView
} from 'react-native';

import s from './style'

const Item = () => (
	<View style={s.item}>
	<View style={s.ctn}>

	<View style={s.left}>
	<Image style={s.img} source={require('./item.jpeg')}/>
	</View>
	
	<View style={s.right}>
	<View ><Text style={s.title} allowFontScaling={false} >【乐高】Yellow Submarine 乐高积木! </Text></View>
	<View ><Text style={s.price} allowFontScaling={false} >$128</Text></View>
	
	<View style={s.detailwrap}><View style={s.detail}>
	<Text style={s.detailctn} allowFontScaling={false} >销量: 128</Text>
	<Text style={s.detailctn} allowFontScaling={false} >成交额: 64</Text>
	</View><View style={s.detail} allowFontScaling={false} >
	<Text style={s.detailctn} allowFontScaling={false} >库存: 1024</Text>
	<Text style={s.detailctn} allowFontScaling={false} >添加: 2018/1/1</Text>	
	</View></View>
	
	</View>
	
	</View>
	<View style={s.btnwrap}>
	<TouchableOpacity style={s.btn}>
	<Text style={s.tabf} allowFontScaling={false} >修改</Text>
	</TouchableOpacity>
	<TouchableOpacity style={s.btn}>
	<Text style={s.tabf} allowFontScaling={false} >分享</Text>
	</TouchableOpacity>
	<TouchableOpacity style={s.btn}>
	<Text style={s.tabf} allowFontScaling={false} >排序</Text>
	</TouchableOpacity>
	<TouchableOpacity style={s.btn}>
	<Text style={s.tabf} allowFontScaling={false} >删除</Text>
	</TouchableOpacity>
	</View>
	</View>
)

const Tabs = ({ imanagerTab, navigation }) => (
	<View style={{display:'flex',flex:1}}>
	<ScrollView>
	<Item />	
	</ScrollView>
	<TouchableOpacity style={s.addItem} onPress={()=>navigation.navigate('AddItem')}>
	<Text style={s.tabf} allowFontScaling={false} >添加商品</Text>
	</TouchableOpacity>
	</View>
)
    

export default Tabs
