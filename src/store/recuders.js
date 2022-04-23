import {
    SIGNIN_REQUEST,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    SIGNUP_FAILURE
} from "./actions";
import {initialState} from "./initialState";


export function reducer(state = initialState, action) {
    switch (action.type) {
        case SIGNUP_REQUEST: {
            console.log('signup_request')
            return state;
        }
        case SIGNIN_REQUEST: {
            return state;
        }
        case SIGNUP_SUCCESS: {
            console.log('signup_success')
            return state;
        }
        case SIGNIN_SUCCESS: {
            return {
                ...state,
                authorization: {
                    is_authorized: true,
                    token: action.token
                }
            };
        }
        case SIGNIN_FAILURE: {
            alert(action.message)
            return state;
        }
        case SIGNUP_FAILURE: {
            alert(action.message)
            return state;
        }
        default:
            return state;
    }
}