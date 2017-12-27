import {combineReducers} from 'redux'
import loginReducer from './login'
import cstmServiceReducer from './cstmService'
import workbenchReducer from './workbench'

const rootReducer = combineReducers({
    loginReducer,cstmServiceReducer, workbenchReducer
})

export default rootReducer
