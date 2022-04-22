export function signup(username, password, avatar){
    return {
            type: SIGNUP_REQUEST
    }
}
export function singin(username, password){
    return {
        type: SIGNIN_REQUEST
    }
}
export const SIGNUP_REQUEST = 'signup';
export const SIGNIN_REQUEST = 'signin';