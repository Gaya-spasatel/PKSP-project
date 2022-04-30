import {
    SIGNIN_REQUEST,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    SIGNUP_FAILURE,
    REGISTER_FORM_CHANGED,
    LOGIN_FORM_CHANGED,
    EXIT_SUCCESS,
    ADD_POST_SUCCESS,
    ADD_POST_FORM_CHANGED,
    POSTS_ALL_SUCCESS
} from "./actions";
import {initialState} from "./initialState";


export function reducer(state = initialState, action) {
    switch (action.type) {
        case SIGNUP_REQUEST: {
            alert('signup_request')
            return state;
        }
        case SIGNIN_REQUEST: {
            alert('signin_request')
            return state;
        }
        case SIGNUP_SUCCESS: {
            alert('signup_success')
            console.log('signup_success')
            return state;
        }
        case SIGNIN_SUCCESS: {
            alert("login success")
            return {
                ...state,
                authorization: {
                    is_authorized: true,
                    token: action.token,
                    username: action.username
                }
            };
        }
        case EXIT_SUCCESS:{
            return {
                ...state,
                authorization: {
                    is_authorized: false,
                    token: '',
                    username: ""
                }
            };
        }
        case REGISTER_FORM_CHANGED:{
            return {
                ...state,
                input_registration:{
                    login: action.username,
                    password: action.password,
                    avatar: action.avatar
                }
            }
        }
        case LOGIN_FORM_CHANGED:{
            return {
                ...state,
                input_login:{
                   username: action.username,
                    password: action.password,
                }
            }
        }
        case SIGNIN_FAILURE: {
            alert('failure');
            alert(action.message)
            return state;
        }
        case SIGNUP_FAILURE: {
            alert('registration failure')
            alert(action.message)
            return state;
        }
        case ADD_POST_SUCCESS:{
            alert('Successfully added post!');
            return state;
        }
        case ADD_POST_FORM_CHANGED:{
            return{
              ...state,
                input_post:{
                    name: action.name,
                    text:action.text,
                }
            };
        }
        case POSTS_ALL_SUCCESS:{
            alert('reducer get posts success')
            return {
                ...state,
                needLoading: false,
                posts: action.posts,
            }
        }
        default:
            return state;
    }
}