//wait order

import React from 'react'
import {
    View,Text,TouchableOpacity
}from 'react-native'

import s from '../style.js'

const Sorder = ({info,navigate})=>(
	<TouchableOpacity onPress={()=>navigate(info.jump)}>
	<View style={s.nctnr}>
	<Text allowFontScaling={false} style={s.number}>{info.count}</Text>
	<Text allowFontScaling={false} style={s.label}>{info.label}</Text>
	</View>
	</TouchableOpacity>
)

export default Sorder
