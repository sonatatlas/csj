import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//actions
import {
    toggleNavBar,showLogin,tapLogin,toggleQRcode
} from '../../actions/navbar'
import $ from 'jquery'

//components
import NavBarModel from '../../components/navbar'


import createHistory from 'history/createBrowserHistory'
const history = createHistory()
const gobbg = ()=>{
    history.push('/items')
    history.go()
}

class NavBar extends Component {
    static propTypes = {
	isOpen: PropTypes.bool.isRequired,	
	dispatch : PropTypes.func.isRequired
    }
    render() {
	const {dispatch,isOpen,isLogin,isShownLogin,isQRcode} = this.props
	const open =()=>{dispatch(toggleNavBar(!isOpen))}
	const qrcode = ()=>{dispatch(toggleQRcode(!isQRcode))}
	const completeLogin =(e)=>{
	    var params = e.serializeArray()
	    var values = {};  
            for( var x in params ){  
		values[params[x].name] = params[x].value;  
            }
	    $.post("http://localhost:6262/offical/login",values)
		.then((res)=>{
		    res.stat?
			gobbg():
			alert('账号或密码错误')
		})
	}
	const login =()=>{dispatch(showLogin(!isShownLogin))}
	const p ={
	    open,isOpen,login,isLogin,isShownLogin,completeLogin,isQRcode,qrcode
	}
	return (
		<div>
		<NavBarModel p={p}/>
		</div>
	);
    }
}

const mapStateToProps = state => {
    const { isOpen,isLogin,isShownLogin, isQRcode } = state.navbarReducer
    return {
	isOpen,isLogin,isShownLogin,isQRcode
    }    
}

export default connect(mapStateToProps)(NavBar);
