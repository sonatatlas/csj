//wait order

import React from 'react'
import {
    View,Text    
}from 'react-native'

import s from '../style.js'

const Sorder = ({info})=>(
	<View style={s.nctnr}>
	<Text style={s.number}>{info.count}</Text>
	<Text style={s.label}>{info.label}</Text>
	</View>
)

export default Sorder
