export function register(username, password, avatar) {
    alert('in func');
    return (dispatch) => {
        alert('in dispatch')
        dispatch(signup_request())
        fetch('http://localhost:3001/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password, avatar}),
        }).then(res => {
            alert('got answer')
            return res.text()
        }).then(data => {
            data = JSON.parse(data);
            if (data.result === 'added') {
                dispatch(signup_success())
            } else{
                dispatch(signup_failure(data.result))
            }
        }).catch(error => {
            dispatch(signup_failure(error))
        })
    };
}

export function login(username, password) {
    return (dispatch) => {
      dispatch(signin_request())
        fetch('http://localhost:3001/users', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        }).then(res => {
            return res.text()
        }).then(data => {
            data = JSON.parse(data);
            if (data.result === 'authorized') {
                dispatch(signin_success(data.data.token))
            } else dispatch(signin_failure(data.result));
        }).catch(error => {
            dispatch(signin_failure(error))
        })
    };
}

// export function recieveAuth(){
//     return(dispatch, getState) => {
//         const {token} = getState().authorization.token;
//         if (!token) {
//             dispatch({
//                 type: RECIEVE_AUTH_FAILURE
//             })
//         }
//         return callApi('/userauth', token)
//             .then(json => {
//                 dispatch({
//                     type: types.RECIEVE_AUTH_SUCCESS,
//                     payload: json
//                 })
//             })
//             .catch(reason => dispatch({
//                 type: RECIEVE_AUTH_FAILURE,
//                 payload: reason
//             }));
//     }
// }

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

export function signin_success(token) {
    return {
        type: SIGNIN_SUCCESS,
        token: token,
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

export const SIGNUP_REQUEST = 'signup/request';
export const SIGNIN_REQUEST = 'signin/request';
export const SIGNUP_SUCCESS = 'signup/success';
export const SIGNIN_SUCCESS = 'signin/success';
export const SIGNUP_FAILURE = 'signup/failure';
export const SIGNIN_FAILURE = 'singin/failure';
export const RECIEVE_AUTH_FAILURE = 'auth_failure'