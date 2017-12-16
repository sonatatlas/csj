
//login containers

import React,{Component} from 'react'
import LoginComponent from '../../components/login'
import {connect} from 'react-redux'
import { login as _login, valueInput } from '../../actions/login'
import { Alert, Keyboard, AsyncStorage }from 'react-native'
import { SERVER } from 'init'

class Login extends Component{
    
    _inputValue = ( type, value )=>{
	let { dispatch, login } = this.props
	let obj = login.enterValue
	obj[type] = value
	dispatch(valueInput(obj))
    }
    
    _sendLogin = async () =>{
	try{
	    let { dispatch, login } = this.props
	    let res = await fetch( SERVER +'/login', {
		method: 'POST',
		headers: {
		    Accept: 'application/json',
		    'Content-Type': 'application/json',
		},
		body: JSON.stringify(login.enterValue)
	    })
	    let resJson = await res.json()
	    if(resJson.verify){
		dispatch(_login({tel:login.enterValue.tel}))
		await AsyncStorage.setItem('accountTel',login.enterValue.tel)

	    }else{
		Alert.alert('账号或密码错误')
	    }
	}catch(error){
	    console.log(error)
	}
    }
    render(){
	return(
		<LoginComponent inputValue={this._inputValue} sendLogin={this._sendLogin}/>
	)
    }
}

const mapStateToProps = state => ({
    login: state.loginReducer
})

export default connect(mapStateToProps)(Login)
