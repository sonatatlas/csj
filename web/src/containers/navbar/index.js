import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//actions
import {toggleNavBar} from '../../actions/navbar'
import {toggleLogin,toggleQRcode} from '../../actions/account'

//components
import NavBarModel from '../../components/navbar'
import LoginContainer from '../account/login'
import QRcode from '../account/qrcode'


class NavBar extends Component {
    static propTypes = {
	isOpen: PropTypes.bool.isRequired,	
	dispatch : PropTypes.func.isRequired
    }
    render() {
	const {dispatch,isOpen,isLogin,isQRcode } = this.props
	return (
		<div>
		<LoginContainer />
		<QRcode />
		<NavBarModel
	    isOpen={isOpen}
	    toggle={()=>dispatch(toggleNavBar(!isOpen))}	    
	    toggleLogin={()=>dispatch(toggleLogin(!isLogin))}
	    toggleQRcode = {()=>dispatch(toggleQRcode(!isQRcode))}
		/>
		</div>
	);
    }
}

const mapStateToProps = state => {
    const { isOpen } = state.navbarReducer
    const { isLogin,isQRcode } = state.accountReducer
    return {
	isOpen,isLogin,isQRcode
    }    
}

export default connect(mapStateToProps)(NavBar);
