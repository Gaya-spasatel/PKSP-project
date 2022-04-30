import './Header.css'
import logo from "./resorces/logo.svg"
import {Link} from "react-router-dom";
import ExitButton from "./buttons/ExitButton";

function Header(props){
    return(
        <header className={"header"}>
            <Link to="/" className="header-item"><img className="header_logo" src={logo} alt="logo" /></Link>
            <Link to="/posts/all" className="header-item">Posts</Link>
            <Link to="/posts/my" className="header-item">My posts</Link>
            <ExitButton className="header-item"/>
        </header>
    );
}

export default Header;