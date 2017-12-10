import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//actions
import {toggleShopCode} from '../../../actions/navbar'

//components
import ShopCodeModal from '../../../components/modal/shopcode'



class ShopCode extends Component {
    static propTypes = {
	dispatch : PropTypes.func.isRequired
    }
    render() {
	const {dispatch,isShopCode} = this.props
	return (
		<ShopCodeModal
	    isShopCode={isShopCode}
	    toggleShopCode={()=>dispatch(toggleShopCode(!isShopCode))}
		/>
	);
    }
}

const mapStateToProps = state => {
    const { isShopCode } = state.navbarReducer
    return { isShopCode }    
}

export default connect(mapStateToProps)(ShopCode);
