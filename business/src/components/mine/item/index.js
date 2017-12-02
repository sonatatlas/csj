//wait order

import React from 'react'
import {
    View,Text,Image
}from 'react-native'

import s from '../style.js'

const Item = ({info})=>(
	<View style={s.actnr} >
        <Text style={s.tf}>{info.label}</Text>
        <Text style={s.extra}>{info.extra}</Text>
        </View>
)

export default Item
