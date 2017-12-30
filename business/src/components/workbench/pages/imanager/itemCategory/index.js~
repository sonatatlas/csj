import React from 'react'

import {
    View, Text, TouchableOpacity, StatusBar, ScrollView
} from 'react-native'

import s from './style.js' 

import Allitems from '../items'
import Categories from './categories'

const Ctn = ({navigation, itemTab, items, categories}) =>{
    if(itemTab===1){
	return( <Allitems navigation={navigation} items={items} /> )
    }else{
	return( < Categories navigation = {navigation} categories={categories} /> )
    }
}

const Tab = ({switchTab})=>(
	<View style={s.tabwrap}>
	<TouchableOpacity onPress ={()=>{switchTab(1)}} style={s.tab}>
	<Text allowFontScaling={false} style={s.tf}>全部商品</Text></TouchableOpacity>
	<TouchableOpacity onPress ={()=>{switchTab(2)}} style={s.tab}>
	<Text allowFontScaling={false} style={s.tf}>分类管理</Text></TouchableOpacity>	
	</View>
)

const ItemCategoryModel = ({navigation, switchTab, itemTab, categories, items }) =>{
    return(
	<View style={{display:'flex',flex:1}}>
	<StatusBar barStyle="dark-content"/>
	<Tab  switchTab={switchTab}/>
	<Ctn navigation={navigation} itemTab={itemTab} items={items} categories={categories}/>
	</View>
    )
}

export default ItemCategoryModel
