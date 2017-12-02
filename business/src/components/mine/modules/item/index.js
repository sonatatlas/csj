//wait order

import React from 'react'
import {
    View,Text,Image
}from 'react-native'

import s from '../style.js'

const infortg = [{
    label:'姓名','草市集'
},{
    label:'昵称',''
}]

const setrtg = [{
    label:'消息设置',''
},{
    label:'清空缓存','1.0M'
}]

const prortg = [
    label:'关于草市集','',
    label:'意见反馈','',
    label:'举报电话',''
]

const Item = ({info})=>(
	<View style={s.nctnr}>
	<Image style={s.icon} source={{uri:info.icon}}/>
	<Text style={s.label}>{info.label}</Text>
	</View>
)

export default Item
