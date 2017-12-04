//login reducer

import {combineReducers} from 'redux'
import {
    ACCESSTAB,OMANAGERTAB,IMANAGERTAB,PMANAGERTAB
} from '../../actions/cstmService'

const isLeft=(state=true,action)=>{
    switch(action.type){
    case ACCESSTAB:
	return action.reddit
    default:
	return state
    }
}

const omanagerTab = (state=1,action)=>{
    switch(action.type){
    case OMANAGERTAB:
	return action.reddit
    default:
	return state
    }
}

const imanagerTab = (state=1,action)=>{
    switch(action.type){
    case IMANAGERTAB:
	return action.reddit
    default:
	return state
    }
}

const pmanagerTab = (state=1,action)=>{
    switch(action.type){
    case PMANAGERTAB:
	return action.reddit
    default:
	return state
    }
}

const cstmServiceReducers = combineReducers({
    isLeft,omanagerTab,imanagerTab,pmanagerTab
})

export default cstmServiceReducers
