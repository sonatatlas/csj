import { combineReducers } from 'redux'
import {
    NORMAL, ABOARD,
    UNITY, MULTIPLE
} from '../../actions/items'

const sItemType = (state=NORMAL, action)=>{
    switch (action.type){
    case NORMAL:
	return action.reddit
    case ABOARD:
	return action.reddit
    default:
	return state
    }
}

const sItemRank = (state=UNITY, action)=>{
    switch (action.type){
    case UNITY:
	return action.reddit
    case MULTIPLE:
	return action.reddit
    default:
	return state
    }
}

const itemReducer = combineReducers({
    sItemType,sItemRank
    
})

export default itemReducer
