import React,{Component} from 'react'

import HomeModal from '../../components/home'
import {toggleQRcode,toggleShopCode} from '../../actions/navbar'
import {connect} from 'react-redux'


class Home extends Component{
    render(){
	const {isQRcode,isShopCode,dispatch} = this.props	
	return(
		<HomeModal
	    qrcode={()=>dispatch(toggleQRcode(!isQRcode))}
	    shopcode={()=>dispatch(toggleShopCode(!isShopCode))}	    
		/>
	)
    }
}

const mapStateToProps = state => {
    const { isQRcode,isShopCode } = state.navbarReducer
    return {
        isQRcode,isShopCode
    }
}

export default connect(mapStateToProps)(Home);
