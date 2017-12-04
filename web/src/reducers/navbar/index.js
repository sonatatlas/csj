import { combineReducers } from 'redux'
import {
    TOGGLE
} from '../../actions/navbar'



const isOpen = (state=false, action)=>{
    switch (action.type){
    case TOGGLE:
	return action.reddit
    default:
	return state
    }
}

const navbarReducer = combineReducers({
    isOpen
})

export default navbarReducer
