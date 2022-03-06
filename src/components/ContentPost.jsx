import "./ContentPost.css"
import {useParams} from "react-router-dom";
import ContentNotFound from "./ContentNotFound";
import Post from "./post/Post";

function ContentPost(props){
    let post_id = useParams().number;
    if(props.posts[post_id]){
        const post = props.posts[post_id]
        return(
            <div className="content">
            <Post date={post.date} text={post.text} author={post.author} name={post.name}/>
            </div>
        );
    }

    return(
        <div className="content">
            <ContentNotFound/>
        </div>
    );
}

export default ContentPost;