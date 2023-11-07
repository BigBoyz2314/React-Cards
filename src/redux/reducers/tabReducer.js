import * as actionTypes from '../actions/type';


export const tabReducer = (state = actionTypes.ALL, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_TAB:
            return action.filter;
        default:
            return state;
    }
}