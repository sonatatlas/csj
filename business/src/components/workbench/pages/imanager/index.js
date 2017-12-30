import React from 'react';

import {
    TouchableWithoutFeedback, TouchableOpacity,Text,ScrollView,
    StatusBar,Alert, View
}from 'react-native'

import Tabs  from './tabs'
import Items from './items'

import s from './style.js'


const Imanager = ({imanagerTab,switchImanagerTab, navigation, items }) => (
	<View style={s.ctnr}>
	<StatusBar barStyle="dark-content"/>
	<Tabs imanagerTab={imanagerTab} switchImanagerTab={switchImanagerTab} />
        <View style={{display:'flex',flex:1}}>
        <Items navigation={navigation} items={items}/>
        <TouchableOpacity style={s.addItem} onPress={()=>navigation.navigate('AddItem')}>
        <Text style={s.tabf} allowFontScaling={false} >添加商品</Text>
        </TouchableOpacity>
        </View>
	</View>
);

export default Imanager
