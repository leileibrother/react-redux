import {TYPE_ALERT} from '../action/action';

export default function doAlert(state = null, action) {
    switch (action.type){
        case TYPE_ALERT:
            /*return Object.assign({},state,{text:action.data});*/
            return state = action.data;
        default:
            return state;
    }
}