import { combineReducers } from 'redux'
import {
    TOGGLE,SCROLL
} from '../../actions/navbar'



const isOpen = (state=false, action)=>{
    switch (action.type){
    case TOGGLE:
	return action.reddit
    default:
	return state
    }
}
const navStat = (state=1,action)=>{
    switch(action.type){
    case SCROLL:
	return action.reddit
    default:
	return state
    }
}

const navbarReducer = combineReducers({
    isOpen,navStat
})

export default navbarReducer
