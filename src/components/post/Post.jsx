import "./Post.css"
import UserInfo from "./UserInfo";

function formdate(date) {
    return date.toLocaleDateString();
}

function Post(props){
    return(
        <div className="Post">
            <div className="Post-name">{props.name}</div>
            <UserInfo user={props.author}/>
            <div className="Post-text">{props.text}</div>
            <div className="Post-date">{formdate(props.date)}</div>
        </div>
    );
}

export default Post;