//wait order

import React from 'react'
import {
    View,Text,Image,TouchableOpacity
}from 'react-native'

import s from '../style.js'

const Item = ({info,navigate})=>(
	<TouchableOpacity style={s.nctnr}
    onPress={()=>{navigate(info.jump)}}>
	<Image style={s.icon} source={info.icon}/>
	<Text allowFontScaling={false} style={s.label}>{info.label}</Text>
	</TouchableOpacity>
)

export default Item
