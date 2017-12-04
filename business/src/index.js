//App

import React from 'react';
import {connect} from 'react-redux'
import RootNavigator from './containers/rootNavigator'
import Login from './containers/login'
import {tapLogin} from './actions/login'
import {
    View,AsyncStorage,
}from 'react-native'
class App extends React.Component {
    constructor(props){
	super(props)
    }
    async componentWillMount(){
	const {dispatch,isLogin} = this.props
	const dir =(bool)=>{dispatch(tapLogin(bool))}
	const item = await AsyncStorage.getItem('isLogin')
	item?dir(true):dir(false)
    }

    render() {
	const {isLogin} = this.props
//	if(isLogin){
	    return (<RootNavigator />)
//	}else{
//	    return(<Login />)
//	}
    }
}

const mapStateToProps = state=>{
    const {isLogin} = state.loginReducer
    return{
	isLogin
    }
}

export default connect(mapStateToProps)(App)
