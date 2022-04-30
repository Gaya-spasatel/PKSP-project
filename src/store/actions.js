export function register(username, password, avatar) {
    return (dispatch) => {
        dispatch(signup_request())
        fetch('http://localhost:3001/users/reg', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password, avatar}),
        }).then(res => {
            return res.json()
        }).then(data => {
            if (data.result === 'added') {
                dispatch(signup_success())
            }else if(data.data.message !== undefined) dispatch(signin_failure(data.data.message));
            else{
                dispatch(signup_failure(data.result))
            }
        }).catch(error => {
            dispatch(signup_failure(error))
        })
    };
}

export function login(username, password) {
    console.log('login')
    return (dispatch) => {
      dispatch(signin_request())
        fetch('http://localhost:3001/users/auth', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        }).then(res => {
            console.log(res)
            return res.json()
        }).then(data => {
            alert('data')
            alert(data.toString())
            if (data.result === 'authorized') {
                dispatch(signin_success(data.data.token, username))
            } else dispatch(signin_failure(data.result));
        }).catch(error => {
            console.log(error)
            dispatch(signin_failure(error))
        })
    };
}

export function register_form_changed(username, password, avatar){
    return {
        type: REGISTER_FORM_CHANGED,
        username: username,
        password: password,
        avatar: avatar
    }
}

export function login_form_changed(username, password){
    return {
        type: LOGIN_FORM_CHANGED,
        username: username,
        password: password,
    }
}

export function signup_request() {
    return {
        type: SIGNUP_REQUEST,
    }
}

export function signin_request() {
    return {
        type: SIGNIN_REQUEST,
    }
}

export function signup_success() {
    return {
        type: SIGNUP_SUCCESS
    }
}

export function signin_success(token, username) {
    return {
        type: SIGNIN_SUCCESS,
        token: token,
        username: username
    }
}

export function signup_failure(message) {
    return {
        type: SIGNUP_FAILURE,
        message: message
    }
}

export function signin_failure(message) {
    return {
        type: SIGNIN_FAILURE,
        message: message
    }
}

export function exit_request(){
    return {
        type: EXIT_REQUEST,
    }
}

function exit_success() {
    return {
        type: EXIT_SUCCESS,
    };
}

function exit_failure(result) {
    return {
        type: EXIT_FAILURE,
        message: result
    };
}

export function exit(token){
    return (dispatch) => {
        dispatch(exit_request())
        fetch('http://localhost:3001/users', {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({token}),
        }).then(res => {
            console.log(res)
            return res.json()
        }).then(data => {
            alert('data')
            alert(data.toString())
            if (data.result === 'success') {
                dispatch(exit_success())
            } else dispatch(exit_failure(data.result));
        }).catch(error => {
            console.log(error)
            dispatch(exit_failure(error))
        })
    };
}

export const SIGNUP_REQUEST = 'signup/request';
export const SIGNIN_REQUEST = 'signin/request';
export const SIGNUP_SUCCESS = 'signup/success';
export const SIGNIN_SUCCESS = 'signin/success';
export const SIGNUP_FAILURE = 'signup/failure';
export const SIGNIN_FAILURE = 'singin/failure';
export const RECIEVE_AUTH_FAILURE = 'auth_failure';
export const REGISTER_FORM_CHANGED = 'register_form/changed';
export const LOGIN_FORM_CHANGED = 'login_form/changed';
export const EXIT_REQUEST = 'exit/request';
export const EXIT_SUCCESS = 'exit/success';
export const EXIT_FAILURE = 'exit/failure';