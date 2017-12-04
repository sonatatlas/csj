import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//actions
import {
    toggleLogin
} from '../../../actions/account'

//import $ from 'jquery'
//components
import LoginModel from '../../../components/account/login'

class Login extends Component {
    static propTypes = {
	dispatch : PropTypes.func.isRequired
    }
    render() {
	const {dispatch,isLogin} = this.props
	const completeLogin =(e)=>{
	    alert('wait')
//	    var params = e.serializeArray()
//	    var values = {};  
//            for( var x in params ){  
//		values[params[x].name] = params[x].value;  
//            }
//	    $.post("http://localhost:6262/offical/login",values)
//		.then((res)=>{
//		    res.stat?
//			gobbg():
//			alert('账号或密码错误')
//		})
	}
	return (
		<LoginModel
	    isLogin={isLogin}
	    toggleLogin={()=>dispatch(toggleLogin(!isLogin))}
	    componentLogin={completeLogin}
		/>
	);
    }
}

const mapStateToProps = state => {
    const { isLogin } = state.accountReducer
    return {
	isLogin
    }    
}

export default connect(mapStateToProps)(Login);
