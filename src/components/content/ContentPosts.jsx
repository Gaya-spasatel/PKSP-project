import Post from "../post/Post";
import "./css/ContentPosts.css"
import {useDispatch, useSelector} from "react-redux";
import {getAuthorization, getPosts} from "../../store/selectors";
import {get_all_posts} from "../../store/actions";
import {Navigate} from "react-router-dom";
import React from "react";


function ContentPosts(props){
    const posts2 = useSelector(getPosts())
    const token = useSelector(getAuthorization()).token;
    const dispatch = useDispatch()
    if (!useSelector(getAuthorization()).is_authorized) {
        return (<Navigate to={'/auth'}/>);
    }
    dispatch(get_all_posts(token))
    const posts = props.posts.map((post)=>
        <Post date={post.date} text={post.text} author={post.author} name={post.name} id={post.id} alltext={false}/>
    );

    return(
        <div className="content">
            {posts}
        </div>
    );
}

export default ContentPosts;