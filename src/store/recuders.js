import {SIGNIN_REQUEST, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNIN_SUCCESS, SIGNIN_FAILURE, SIGNUP_FAILURE} from "./actions";
import {initialState} from "./initialState";

export function reducer(state = initialState, action){
    switch (action.type){
        case SIGNUP_REQUEST: {
            return state;
        }
        case SIGNIN_REQUEST:{
            return state;
        }
        case SIGNUP_SUCCESS:{
            return state;
        }
        case SIGNIN_SUCCESS:{
            return state;
        }
        case SIGNIN_FAILURE:{
            return state;
        }
        case SIGNUP_FAILURE:{
            return state;
        }
        default: return state;
    }
}