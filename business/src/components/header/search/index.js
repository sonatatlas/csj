
// header search model

import React,{Component} from 'react'
import {
    View,Text
}from 'react-native'

import s from './style'

const SearchModel = ()=>(
	<View style={s.ctnr}>
	<Text allowFontScaling={false} style={s.sf}>暂时没有新的消息</Text>
	</View>
)

export default SearchModel
