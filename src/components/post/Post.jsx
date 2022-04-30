import "./Post.css"
import UserInfo from "./UserInfo";
import {Link} from "react-router-dom";

function Post(props){
    let text = ""
    if (props.alltext === false){
        text = props.text.substring(0,100)+"..."
    } else{
        text = props.text
    }
    return(
        <div className="Post">
            <Link to={`/posts/${props.id}`} className="Post-name">{props.name}</Link>
            <UserInfo user={props.author}/>
            <div className="Post-text">{text}</div>
            <div className="Post-date">{props.date}</div>
        </div>
    );
}

export default Post;