//wait order

import React from 'react'
import {
    View,Text,Image,TouchableOpacity
}from 'react-native'

import s from '../style.js'

const Item = ({info})=>(
    <TouchableOpacity>
	<View style={s.actnr} >
        <Text style={s.tf}>{info.label}</Text>
        <Text style={s.extra}>{info.extra}</Text>
        </View>
	</TouchableOpacity>
)

export default Item
