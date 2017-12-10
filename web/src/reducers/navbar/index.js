import { combineReducers } from 'redux'
import {
    TOGGLE, SCROLL, QRCODE, SHOPCODE
} from '../../actions/navbar'



const isOpen = (state=false, action)=>{
    switch (action.type){
    case TOGGLE:
	return action.reddit
    default:
	return state
    }
}
const navStat = (state=0,action)=>{
    switch(action.type){
    case SCROLL:
	return action.reddit
    default:
	return state
    }
}

const isQRcode = (state=false, action)=>{
    switch (action.type){
    case QRCODE:
        return action.reddit
    default:
        return state
    }
}

const isShopCode = (state=false, action)=>{
    switch (action.type){
    case SHOPCODE:
        return action.reddit
    default:
        return state
    }
}

const navbarReducer = combineReducers({
    isOpen, isQRcode, navStat, isShopCode
})

export default navbarReducer
