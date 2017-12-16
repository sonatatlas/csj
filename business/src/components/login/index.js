
import React,{Component} from 'react'
import {
    Text,
    View,
    Image,
    TextInput,
    StatusBar,Keyboard,
    TouchableOpacity,
    TouchableWithoutFeedback,KeyboardAvoidingView
}from 'react-native'


import s from './style.js'

const Login = ({ inputValue, sendLogin})=>(
	<TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
	<KeyboardAvoidingView style={s.ctnr} behavior="padding" keyboardVerticalOffset={10}>
	<Image style={s.logo} source={require('./logo.png')}/>
	<View style={s.space}/>
	<View style={s.tiw}><TextInput allowFontScaling={false} style={s.ti}
    onChangeText={(text)=>inputValue('tel',text)} /></View>
	<View style={s.tiw}><TextInput allowFontScaling={false} secureTextEntry={true} style={s.ti}
    onChangeText={(text)=>inputValue('psw',text)}/></View>
	<TouchableOpacity style={s.btn} title={'登录'} onPress={()=>sendLogin()}>
	<Text style={s.fontl} allowFontScaling={false}>登录</Text></TouchableOpacity>
	</KeyboardAvoidingView>
	</TouchableWithoutFeedback>
)


export default Login
