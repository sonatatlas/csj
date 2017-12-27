//login reducer


import { combineReducers } from 'redux'
import { ITEMTAB } from '../../actions/workbench'
import { UPLOAD }  from '../../actions/workbench'

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
    case UPLOAD:
	return action.reddit
    default:
	return state
    }
}

const navReducers = combineReducers({
    itemTab, uploadInfo
})

export default navReducers
