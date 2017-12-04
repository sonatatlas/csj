
//login containers

import React,{Component} from 'react'
import LoginComponent from '../../components/login'
import {connect} from 'react-redux'
import {tapLogin} from '../../actions/login'

import {
    Alert,
    Keyboard,
}from 'react-native'

const kbdismiss =()=>Keyboard.dismiss()
const login = async ()=>{
    try {
        let response = await fetch(url+'/business/login',{
	    method:'POST',
	    headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	    },body:"account=caoshiji666&psw=caoshiji666"
	});
	let responseJson = await response.json();
	return responseJson
    } catch(error) {
	console.error(error);
    }
}

class Login extends Component{
    componentWillMount(){
    }
    render(){
	const {dispatch} = this.props
	const enterCsj = async ()=>{
	    let res = await login()	   
	    res.stat?dispatch(tapLogin(true)):Alert.alert('账号密码错误')
	}
	const p={
	    kbdismiss,enterCsj
	}
	return(
		<LoginComponent p={p}/>
	)
    }
}

const mapStateToProps = state=>{
    const {isLogin} = state.loginReducer
    return{
        isLogin
    }
}
export default connect(mapStateToProps)(Login)
