import doCounter from './doCounter';
import doAlert from './doAlert';
import { combineReducers } from 'redux'


export default combineReducers({
    doCounter,
    doAlert
})

