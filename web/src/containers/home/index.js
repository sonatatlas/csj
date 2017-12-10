import React,{Component} from 'react'

import HomeModal from '../../components/home'
import {toggleQRcode} from '../../actions/navbar'
import {connect} from 'react-redux'


class Home extends Component{
    render(){
	const {isQRcode,dispatch} = this.props	
	return(
		<HomeModal qrcode={()=>dispatch(toggleQRcode(!isQRcode))}/>
	)
    }
}

const mapStateToProps = state => {
    const { isQRcode } = state.navbarReducer
    return {
        isQRcode
    }
}

export default connect(mapStateToProps)(Home);
