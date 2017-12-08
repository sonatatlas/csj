import React,{Component} from 'react'

import HomeModal from '../../components/home'
import {toggleQRcode} from '../../actions/account'
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
    const { isQRcode } = state.accountReducer
    return {
        isQRcode
    }
}

export default connect(mapStateToProps)(Home);
