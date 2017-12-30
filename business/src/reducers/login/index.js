//login reducer


import {combineReducers} from 'redux'
import { LOGIN, REFRESH, ACCOUNTANDPASSWD} from '../../actions/login'

const loginState=(state=false,action)=>{
    switch(action.type){
    case LOGIN:
	return action.reddit
    default:
	return state
    }
}

const enterValue = (state={},action)=>{
    switch(action.type){
    case ACCOUNTANDPASSWD:
	return action.reddit
    default:
	return state
    }
}

const loginReducers = combineReducers({
    loginState, enterValue
})

export default loginReducers
