import Post from "./post/Post";
import "./ContentPosts.css"


function ContentPosts(props){
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