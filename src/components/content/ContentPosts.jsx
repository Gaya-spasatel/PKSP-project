import Post from "../post/Post";
import "./css/ContentPosts.css"
import {useDispatch, useSelector} from "react-redux";
import {getAuthorization, getNeedLoading, getPosts} from "../../store/selectors";
import {get_all_posts} from "../../store/actions";
import React, {useEffect} from "react";


function ContentPosts(props){
    const posts2 = useSelector(getPosts())
    const token = useSelector(getAuthorization()).token;
    const needLoading = useSelector(getNeedLoading())
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(get_all_posts(token))
    }, [dispatch, needLoading, token])

    const posts = posts2.map((post)=>
        <Post date={post.date} text={post.post_text} author={{name: post.username, avatarUrl: post.avatar}} name={post.name} id={post.id_post} alltext={false}/>
    );
    console.log(posts)
    return(
        <div className="content">
            {posts}
        </div>
    );
}

export default ContentPosts;