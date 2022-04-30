export const initialState ={
    authorization:{
        is_authorized: false,
        token: '-',
        username: ''
    },
    input_registration:{
        login: '',
        password: '',
        avatar: ''
    },
    input_login:{
      username: '',
      password: ''
    },
    posts: [],
    myPosts: [],
    input_post:{
        name: '',
        text:'',
    }
}