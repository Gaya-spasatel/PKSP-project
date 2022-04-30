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

export function get_all_posts(token){
    return (dispatch) => {
        dispatch(get_all_posts_request())
        fetch('http://localhost:3001/posts', {
            method: "POST",
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
            console.log(data)
            if (data.result === 'success') {
                dispatch(get_all_posts_success(null))
            } else dispatch(get_all_posts_failure(data.result));
        }).catch(error => {
            console.log(error)
            dispatch(get_all_posts_failure(error))
        })
    };
}

export function get_all_posts_request(){
    return{
        type: POSTS_ALL_REQUEST,
    }
}

export function get_all_posts_success(posts){
    return{
        type: POSTS_ALL_SUCCESS,
        data: posts
    }
}

export function get_all_posts_failure(message){
    return {
        type: POSTS_ALL_FAILURE,
        message: message
    }
}

export function add_post_request(){
    return{
        type: ADD_POST_REQUEST,
    }
}

export function add_post_success(){
    return {
        type: ADD_POST_SUCCESS
    }
}

export function add_post_failure(message){
    return {
        type: ADD_POST_FAILURE,
        message: message
    }
}

export function add_post_form_changed(name, text){
    return {
        type: ADD_POST_FORM_CHANGED,
        name: name,
        text: text,
    }
}

export function add_post(token, name, post_text){
    alert(name+" "+post_text);
    return (dispatch) => {
        dispatch(add_post_request())
        fetch('http://localhost:3001/posts', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({token, post_text, name}),
        }).then(res => {
            console.log(res)
            return res.json()
        }).then(data => {
            alert('data')
            alert(data.toString())
            console.log(data)
            if (data.result === 'success') {
                dispatch(add_post_success())
            } else dispatch(add_post_failure(data.result));
        }).catch(error => {
            console.log(error)
            dispatch(add_post_failure(error))
        })
    };
}

export const SIGNUP_REQUEST = 'signup/request';
export const SIGNIN_REQUEST = 'signin/request';
export const SIGNUP_SUCCESS = 'signup/success';
export const SIGNIN_SUCCESS = 'signin/success';
export const SIGNUP_FAILURE = 'signup/failure';
export const SIGNIN_FAILURE = 'singin/failure';
export const REGISTER_FORM_CHANGED = 'register_form/changed';
export const LOGIN_FORM_CHANGED = 'login_form/changed';
export const EXIT_REQUEST = 'exit/request';
export const EXIT_SUCCESS = 'exit/success';
export const EXIT_FAILURE = 'exit/failure';
export const POSTS_ALL_REQUEST = 'posts_all/request';
export const POSTS_ALL_SUCCESS = 'posts_all/success';
export const POSTS_ALL_FAILURE = 'posts_all/failure';
export const ADD_POST_REQUEST = 'add_post/request';
export const ADD_POST_SUCCESS = 'add_post/success';
export const ADD_POST_FAILURE = 'add_post/failure';
export const ADD_POST_FORM_CHANGED = 'add_post/form_changed';