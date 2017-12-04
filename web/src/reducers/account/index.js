import { combineReducers } from 'redux'
import {
    TOGGLELOGIN, QRCODE
} from '../../actions/account'

const isQRcode = (state=false, action)=>{
    switch (action.type){
    case QRCODE:
        return action.reddit
    default:
        return state
    }
}

const isLogin = (state=false, action)=>{
    switch (action.type){
    case TOGGLELOGIN:
	return action.reddit
    default:
	return state
    }
}
      
const accountReducer = combineReducers({
    isLogin,isQRcode
})



export default accountReducer
