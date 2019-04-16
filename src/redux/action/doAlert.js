import {TYPE_ALERT} from '../action/action';


const defaultText={
    text:''
};
export default  function doAlert(state = defaultText, action) {
    switch (action.type){
        case TYPE_ALERT:
            return Object.assign({},state,{text:action.data});
        default:
            return state;
    }
}