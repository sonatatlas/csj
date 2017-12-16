import React from 'react'
import {
    View,Text,TouchableOpacity
}from 'react-native'
import s from './style.js'

const Module = ({title})=>(
	<View style={s.ctn}>
	<Text style={s.t}>{title}</Text>
	<View style={{height:'75%',backgroundColor:'grey'}} />
	<View style={s.btnw}>
	<TouchableOpacity style={s.tt}><Text style={s.t}>删除此模块</Text></TouchableOpacity>
	<TouchableOpacity style={s.tt}><Text style={s.t}>编辑此模块</Text></TouchableOpacity>
	<TouchableOpacity style={s.tt}><Text style={s.t}>移动此模块</Text></TouchableOpacity>
	</View>
	</View>
)

export default Module
