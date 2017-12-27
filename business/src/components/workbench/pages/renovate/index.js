import React from 'react';
import {
    TouchableWithoutFeedback,TouchableOpacity,ScrollView,
    StatusBar,Alert,Text,View,
}from 'react-native'


import s from './style.js'
import Cover from './cover'
import Module from './module'

const Imanager = ({dsms}) => (
	<TouchableWithoutFeedback onPress={dsms}><ScrollView style={s.ctnr}>
	<StatusBar barStyle="dark-content"/>
	<View style={s.tt}>
	<Text style={s.lt}>您的店铺商业: 服饰行业</Text>
	<TouchableOpacity style={s.btn}><Text style={s.ct}>点击修改</Text></TouchableOpacity>
	</View>
	<Cover />
	<Module title='折扣专区' />
	<Module title='店主推荐' />
	<Module title='草市好物' />
	<Module title='拼团购' />	
	</ScrollView></TouchableWithoutFeedback>
);

export default Imanager
