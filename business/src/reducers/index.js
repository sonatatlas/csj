import {combineReducers} from 'redux'
import loginReducer from './login'
import cstmServiceReducer from './cstmService'


const rootReducer = combineReducers({
    loginReducer,cstmServiceReducer
})

export default rootReducer
