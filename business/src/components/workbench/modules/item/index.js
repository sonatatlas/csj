//wait order

import React from 'react'
import {
    View,Text,Image
}from 'react-native'

import s from '../style.js'

const Item = ({info})=>(
	<View style={s.nctnr}>
	<Image style={s.icon} source={{uri:info.icon}}/>
	<Text style={s.label}>{info.label}</Text>
	</View>
)

export default Item
