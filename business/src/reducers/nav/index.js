//login reducer


import { combineReducers } from 'redux'
import RootNavigator  from '../../containers/rootNavigator'

const stackState = (state , action) =>{
    let nextState;
    switch (action.type) {
    default:
        nextState = RootNavigator.router.getStateForAction(action, state);
        break;
    }
    return nextState || state;
}

const navReducers = combineReducers({
    stackState
})

export default navReducers
