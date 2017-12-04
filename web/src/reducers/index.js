import {combineReducers} from 'redux'

import navbarReducer from './navbar'
import itemReducer from './items'
import accountReducer from './account'


const rootReducer = combineReducers({
    navbarReducer,
    itemReducer,
    accountReducer,
})
export default rootReducer
