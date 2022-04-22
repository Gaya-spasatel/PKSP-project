export function signup(username, password, avatar){
    return {
            type: SIGNUP_REQUEST
    }
}
export function signin_request(){
    return {
        type: SIGNIN_REQUEST
    }
}

export function signup_request(){
    return {
        type: SIGNUP_REQUEST
    }
}

export function signup_success(){
    return {
        type: SIGNUP_SUCCESS
    }
}

export function signin_success(){
    return {
        type: SIGNIN_SUCCESS
    }
}

export function signup_failure(){
    return {
        type: SIGNUP_FAILURE
    }
}

export function signin_failure(){
    return {
        type: SIGNIN_FAILURE
    }
}


export const SIGNUP_REQUEST = 'signup/request';
export const SIGNIN_REQUEST = 'signin/request';
export const SIGNUP_SUCCESS =  'signup/success';
export const SIGNIN_SUCCESS = 'signin/success';
export const SIGNUP_FAILURE = 'signup/failure';
export const SIGNIN_FAILURE = 'singin/failure';