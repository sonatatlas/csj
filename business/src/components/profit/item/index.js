//wait order

import React from 'react'
import {
    View,Text,Image,TouchableOpacity
}from 'react-native'

import s from '../style.js'

const Item = ({info})=>(
	<View style={s.ctnr}>
	<TouchableOpacity><View style={s.actnr} >
        <Text style={s.label}>{info.label}</Text>
        <Text style={s.info}>{info.info}</Text>
        </View></TouchableOpacity>
	</View>
)

export default Item
