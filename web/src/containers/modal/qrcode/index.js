import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//actions
import {toggleQRcode} from '../../../actions/account'

//components
import QRcodeModel from '../../../components/modal/qrcode'



class QRcode extends Component {
    static propTypes = {
	dispatch : PropTypes.func.isRequired
    }
    render() {
	const {dispatch,isQRcode} = this.props
	return (
		<QRcodeModel
	    isQRcode={isQRcode}
	    toggleQRcode={()=>dispatch(toggleQRcode(!isQRcode))}
		/>
	);
    }
}

const mapStateToProps = state => {
    const { isQRcode } = state.navbarReducer
    return { isQRcode }    
}

export default connect(mapStateToProps)(QRcode);
