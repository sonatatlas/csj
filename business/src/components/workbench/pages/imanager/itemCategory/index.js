import React from 'react'

import {
    View, Text, TouchableOpacity, StatusBar, ScrollView
} from 'react-native'

import s from './style.js' 

import { Item } from '../ctn'

const Ctn = ({navigation, itemTab}) =>{
    if(itemTab===1){
	return(
		<ScrollView>
		<Item />
		</ScrollView>
	)
    }else{
	return(
		<TouchableOpacity style={s.barBtn} onPress={()=>navigation.navigate('Imanager')}>
		<Text style={s.barf} allowFontScaling={false} >未分类</Text>
		<Text style={s.barf} allowFontScaling={false} >18件商品</Text>
		</TouchableOpacity>
	)
    }
}

const Tab = ({_switchTab})=>(
	<View style={s.tabwrap}>
	<TouchableOpacity onPress ={()=>{_switchTab(1)}} style={s.tab}>
	<Text allowFontScaling={false} style={s.tf}>全部商品</Text></TouchableOpacity>
	<TouchableOpacity onPress ={()=>{_switchTab(2)}} style={s.tab}>
	<Text allowFontScaling={false} style={s.tf}>分类管理</Text></TouchableOpacity>	
	</View>
)

const ItemCategoryModel = ({navigation, _switchTab, itemTab }) =>(
	<View style={{display:'flex',flex:1}}>
	<StatusBar barStyle="dark-content"/>
	<Tab  _switchTab={_switchTab}/>
	<Ctn navigation={navigation} itemTab={itemTab}/>
	</View>
)

export default ItemCategoryModel
