import {combineReducers} from 'redux'
import navbarReducer from './navbar'
import itemReducer from './items'

const rootReducer = combineReducers({
    navbarReducer,
    itemReducer
})
export default rootReducer
