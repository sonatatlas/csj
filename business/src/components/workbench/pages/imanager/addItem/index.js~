import React from 'react'

import {
    View, Text, TouchableOpacity
} from 'react-native'

import s from './style.js' 

const CategoryBar = ({navigation}) =>(
	<TouchableOpacity style={s.barBtn} onPress={()=>navigation.navigate('Imanager')}>
	<Text style={s.barf} allowFontScaling={false} >未分类</Text>
	<Text style={s.barf} allowFontScaling={false} >18件商品</Text>
	</TouchableOpacity>
)

const ItemCategoryModel = ({navigation}) =>(
	<View style={{display:'flex',flex:1,marginTop:10}}>
	<CategoryBar navigation={navigation}/>
	</View>
)

export default ItemCategoryModel
