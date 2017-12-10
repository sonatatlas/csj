import {combineReducers} from 'redux'

import navbarReducer from './navbar'
//import homeReducer from './home'

const rootReducer = combineReducers({
    navbarReducer
})
export default rootReducer
