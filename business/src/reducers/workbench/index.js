//login reducer


import { combineReducers } from 'redux'
import {
    ITEMTAB, UPDATE, UPDATECATEGORIES, UPDATEITEMS
} from '../../actions/workbench'


const itemTab = (state=1, action)=>{
    switch(action.type){
    case ITEMTAB:
	return action.reddit
    default:
	return state
    }
}

const uploadInfo = (state={}, action)=>{
    switch(action.type){
    case UPDATE:
	return action.reddit
    default:
	return state
    }
}

const categories = (state=[], action) => {
    switch(action.type){
    case UPDATECATEGORIES:
	return action.reddit
    default:
	return state
    }
}

const items = ( state = [], action) => {
    switch(action.type){
    case UPDATEITEMS:
	return action.reddit
    default:
	return state
    }
}

const workbenchReducers = combineReducers({
    itemTab, uploadInfo, categories, items
})

export default workbenchReducers
