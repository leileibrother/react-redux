import {TYPE_ONE,TYPE_TWO} from '../action/action';

const defaultValue={
    counter:0
};
export default function doCounter(state = defaultValue, action) {
    console.log(state);
    switch (action.type){
        case TYPE_ONE:
            return Object.assign({},state,{counter:state.counter + action.data});
        case TYPE_TWO:
            return Object.assign({},state,{counter:state.counter - action.data});
        default:
            return state;
    }
}