//login reducer


import {combineReducers} from 'redux'
import {LOGIN} from '../../actions/login'


const isLogin=(state=false,action)=>{
    switch(action.type){
    case "LOGIN":
	return action.reddit
    default:
	return state
    }
}

const loginReducers = combineReducers({
    isLogin
})

export default loginReducers
