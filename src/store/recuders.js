import {SIGNIN_REQUEST, SIGNUP_REQUEST} from "./actions";
import {initialState} from "./initialState";

export function reducer(state = initialState, action){
    switch (action.type){
        case SIGNUP_REQUEST: {
            return state;
        }
        case SIGNIN_REQUEST:{
            return state;
        }
        default: return state;
    }
}