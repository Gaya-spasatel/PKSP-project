import "./css/ContentPost.css"
import {useParams} from "react-router-dom";
import ContentNotFound from "./ContentNotFound";
import Post from "../post/Post";
import {useDispatch, useSelector} from "react-redux";
import {getAuthorization, getNeedLoading, getPosts} from "../../store/selectors";
import {useEffect} from "react";
import {get_all_posts} from "../../store/actions";
import React from "react";

function ContentPost(props) {
    let post_id = useParams().number;
    const posts2 = useSelector(getPosts())
    const token = useSelector(getAuthorization()).token;
    const needLoading = useSelector(getNeedLoading())
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_all_posts(token))
    }, [dispatch, needLoading, token])
    for (let i = 0; i < posts2.length; i++) {
        console.log(posts2[i]);
        console.log(typeof post_id);
        console.log(post_id)
        if (posts2[i].id_post === parseInt(post_id)) {
            const post = posts2[i];
            return (
                <div className="content">
                    <Post date={post.date} text={post.post_text} author={{name: post.username, avatarUrl: post.avatar}}
                          name={post.name} id={post.id_post} alltext={true}/>
                </div>
            );
        }
    }

    return (
        <div className="content">
            <ContentNotFound/>
        </div>
    );
}

export default ContentPost;