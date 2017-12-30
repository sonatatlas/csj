import {combineReducers} from 'redux'
import loginReducer from './login'
import cstmServiceReducer from './cstmService'
import workbenchReducer from './workbench'
import addItemReducer from './additem'

const rootReducer = combineReducers({
    loginReducer,cstmServiceReducer, workbenchReducer, addItemReducer
})

export default rootReducer
