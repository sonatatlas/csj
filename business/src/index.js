//App

import React from 'react';
import {connect} from 'react-redux'
import RootNavigator from './containers/rootNavigator'
import Login from './containers/login'
import { login, sendLogin } from './actions/login'

import { View, AsyncStorage }from 'react-native'
import { addNavigationHelpers } from 'react-navigation'


class App extends React.Component {
    render() {
	const { login, dispatch, state } = this.props
	if(login.loginState){
	    return <RootNavigator screenProps={{dispatch, state}}/>
	}else{
	    return <Login />
	}
    }
}

const mapStateToProps = state => {
    return({
	login : state.loginReducer,
	state: state
    })
}


export default connect(mapStateToProps)(App)
