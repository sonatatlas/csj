//App

import React from 'react';
import {connect} from 'react-redux'
import RootNavigator from './containers/rootNavigator'
import Login from './containers/login'
import { login, sendLogin } from './actions/login'

import {
    View,AsyncStorage,
}from 'react-native'

class App extends React.Component {

    render() {
	const { login } = this.props
	if(login.loginState){
	    return <RootNavigator />
	}else{
	    return <Login />
	}
    }
}

const mapStateToProps = state => ({
    login : state.loginReducer
})


export default connect(mapStateToProps)(App)
