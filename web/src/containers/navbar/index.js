import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//actions
import {toggleNavBar,scrollWindow} from '../../actions/navbar'
import {toggleLogin,toggleQRcode} from '../../actions/account'

//components
import NavBarModel from '../../components/navbar'
import QRcode from '../account/qrcode'
import $ from 'jquery'




class NavBar extends Component {
    static propTypes = {
	isOpen: PropTypes.bool.isRequired,	
	dispatch : PropTypes.func.isRequired
    }
    render() {
	const {dispatch, isOpen, navStat, isQRcode } = this.props
	$(window).scroll(()=>{
	    $(document).scrollTop()===0?
		dispatch(scrollWindow(1)):dispatch(scrollWindow(2))
	})
	const currentStat = ()=>{
	    if(navStat===1){
		return{color:'faded',dark:true,light:false}
	    }else{
		return{color:'white',dark:false,light:true}
	    }
	}
	return (
		<div>
		<QRcode />
		<NavBarModel
	    isOpen={isOpen} navStat = {currentStat}
	    toggle={()=>dispatch(toggleNavBar(!isOpen))}	    
	    toggleQRcode = {()=>dispatch(toggleQRcode(!isQRcode))}
		/>
		</div>
	);
    }
}

const mapStateToProps = state => {
    const { isOpen, navStat } = state.navbarReducer
    const { isQRcode } = state.accountReducer
    return {
	isOpen,isQRcode,navStat
    }    
}

export default connect(mapStateToProps)(NavBar);
