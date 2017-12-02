/*
 * containers/items
 *
 */


import React,{Component} from 'react'
import { connect } from 'react-redux'
//import PropTypes from 'prop-types'

//model
import ItemsModel from '../../components/items'

//actions
import {
    NORMAL, ABOARD,
    UNITY, MULTIPLE,
    itemType,itemRank
} from '../../actions/items'

//main
class ItemsContainer extends Component{
    static propTypes = {

    }
    componentDidMount(){
    }

    render(){
	const dispatch = this.props.dispatch
	const csctgr = {
	    type :{
		normal : ()=>{
		    dispatch(itemType(NORMAL))
		},
		aboard : ()=>{
		    dispatch(itemType(ABOARD))
		},
		itemType : this.props.sItemType
	    },rank:{
		unity:()=>{
		    dispatch(itemRank(UNITY))
		},
		multiple:()=>{
		    dispatch(itemRank(MULTIPLE))
		},
		itemRank:this.props.sItemRank
	    }
	    
	}	
	return(
		<div>
		<ItemsModel csctgr={csctgr}/>
		</div>
	)
    }
}

const mapStateToProps = state => {
    const {
	sItemType,sItemRank
    } = state.itemReducer
    return {
        sItemType,sItemRank
    }
}

export default connect(mapStateToProps)(ItemsContainer);
