import React from 'react'

import {
    View, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback,Keyboard
} from 'react-native'

import s from './style.js' 

const CategoryBar = ({navigation}) =>(
	<TouchableOpacity style={s.barBtn} onPress={()=>navigation.navigate('Imanager')}>
	<Text style={s.barf} allowFontScaling={false} >分类</Text>
	<Text style={s.barf} allowFontScaling={false} >选择</Text>
	</TouchableOpacity>
)

const AddItemModel = ({navigation}) =>(
	<TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} >
	<View style={{display:'flex',flex:1,marginTop:10}}>

	<View style={s.imgWrap}>
	<View style={s.img}></View>
	</View>	
	<View style={s.imgLabel}>
	<Text style={s.barf} allowFontScaling={false} >添加商品</Text>
	</View>

	<CategoryBar  navigation={navigation} />

	<View style={s.detail}>
	<View style={[s.barBtn,{marginTop:0,marginBottom:0,justifyContent:'flex-start'}]}>
	<Text style={s.barf} allowFontScaling={false} >价格</Text>
	<TextInput style={s.ti} />
	</View>
	<View style={[s.barBtn,{marginTop:0,marginBottom:0,justifyContent:'flex-start'}]}>
	<Text style={s.barf} allowFontScaling={false} >库存</Text>
	<TextInput style={s.ti} />
	</View>
	</View>

    </View>
	</TouchableWithoutFeedback>
)

export default AddItemModel
