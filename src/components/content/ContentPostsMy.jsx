import Post from "../post/Post";
import "./css/ContentPosts.css"
import {useDispatch, useSelector} from "react-redux";
import {getAuthorization, getNeedLoadingMy, getPosts, getPostsMy} from "../../store/selectors";
import {get_posts_my} from "../../store/actions";
import React from "react";
import {useEffect} from "react";


function ContentPostsMy(props) {
    const posts2 = useSelector(getPostsMy())
    const token = useSelector(getAuthorization()).token;
    const username = useSelector(getAuthorization()).username;
    const needLoading = useSelector(getNeedLoadingMy())
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_posts_my(token))
    }, [dispatch, needLoading, token])

    const posts = posts2.map((post) => {
        return <Post date={post.date} text={post.post_text} author={{name: post.username, avatarUrl: post.avatar}}
              name={post.name} id={post.id_post} alltext={false}/>;
    });
    console.log(posts)
    return (
        <div className="content">
            {posts}
        </div>
    );
}

export default ContentPostsMy;