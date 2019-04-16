export const TYPE_ONE = 'TYPE_ONE';
export const TYPE_TWO = 'TYPE_TWO';
export const TYPE_ALERT = 'TYPE_ALERT';
/*export function typeOne(index) {
    return {type:TYPE_ONE,data:index}
}

export function typeTwo(index) {
    return {type:TYPE_TWO,data:index}
}*/

export function typeOne(dispatch,index) {
    dispatch ({type:TYPE_ONE, data:index})
}

export function typeTwo(dispatch,index) {
    dispatch ({type:TYPE_TWO, data:index})
}

export function doAlert(dispatch,text) {
    dispatch({type:TYPE_ALERT, data:text})
}