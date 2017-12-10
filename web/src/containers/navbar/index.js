import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//actions
import {toggleNavBar,toggleQRcode, toggleShopCode, scrollWindow} from '../../actions/navbar'


//components
import NavBarModel from '../../components/navbar'
import QRcode from '../modal/qrcode'
import ShopCode from '../modal/shopcode'
import $ from 'jquery'

class NavBar extends Component {
    static propTypes = {
	isOpen: PropTypes.bool.isRequired,	
	dispatch : PropTypes.func.isRequired
    }
    render() {
	const {dispatch, isOpen, navStat, isQRcode, isShopCode } = this.props
	$(window).scroll(()=>{
            dispatch(scrollWindow($(document).scrollTop()))
        })
	const currentStat = ()=>{
	    if(navStat===0){
		return{color:'faded',dark:true,light:false}
	    }else{
		return{color:'white',dark:false,light:true}
	    }
	}
	return (
		<div>
		<QRcode />
		<ShopCode />
		<NavBarModel
	    isOpen={isOpen} navStat = {currentStat}
	    toggle={()=>dispatch(toggleNavBar(!isOpen))}	    
	    toggleQRcode = {()=>dispatch(toggleQRcode(!isQRcode))}
	    toggleShopCode = {()=>dispatch(toggleShopCode(!isShopCode))}	    
		/>
		</div>
	);
    }
}

const mapStateToProps = state => {
    const { isOpen, isQRcode, isShopCode, navStat } = state.navbarReducer
    return {
	isOpen,isQRcode,navStat, isShopCode
    }    
}

export default connect(mapStateToProps)(NavBar);
