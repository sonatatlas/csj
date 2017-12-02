import { combineReducers } from 'redux'
import {
    TOGGLE,LOGIN,SHOWLOGIN,SETUP
} from '../../actions/navbar'



const isOpen = (state=false, action)=>{
    switch (action.type){
    case TOGGLE:
	return action.reddit
    default:
	return state
    }
}

const isLogin = (state=false, action)=>{
    switch (action.type){
    case LOGIN:
	return action.reddit
    default:
	return state
    }
}

const isShownLogin = (state=false, action)=>{
    switch (action.type){
    case SHOWLOGIN:
	return action.reddit
    default:
	return state
    }
}

const isQRcode = (state=false, action)=>{
    switch (action.type){
    case SETUP:
	return action.reddit
    default:
	return state
    }
}
      
const navbarReducer = combineReducers({
    isOpen, isLogin,isShownLogin, isQRcode
})



export default navbarReducer
