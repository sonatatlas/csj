
import React,{Component} from 'react'
import {
    Text,
    View,
    Image,
    TextInput,
    StatusBar,
    TouchableOpacity,
    TouchableWithoutFeedback
}from 'react-native'


import s from './style.js'

const Login = ({p})=>(
	<TouchableWithoutFeedback onPress={p.kbdismiss}><View style={s.ctnr}>
	<Image
    style={s.logo}
    source={require('./logo.png')}/>
	<View style={s.space}/>
	<View style={s.tiw}><TextInput style={s.ti}  /></View>
	<View style={s.tiw}><TextInput style={s.ti} /></View>
	<TouchableOpacity style={s.btn} title={'登录'} onPress={p.enterCsj}>
	<Text style={s.fontl}>登录</Text></TouchableOpacity>
	</View></TouchableWithoutFeedback>
)


export default Login
