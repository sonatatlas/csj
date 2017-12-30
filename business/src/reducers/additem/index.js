//login reducer


import { combineReducers } from 'redux'
import {
    SELECTCATEGORY
} from '../../actions/additem'


const category = ( state = "点击选择分类", action) => {
    switch(action.type){
    case SELECTCATEGORY:
	return action.reddit
    default:
	return state
    }
}

const addItemReducers = combineReducers({
    category
})

export default addItemReducers
