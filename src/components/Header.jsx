import './Header.css'
import logo from "./resorces/logo.svg"
import {Link} from "react-router-dom";

function Header(){
    return(
        <header className={"header"}>
            <Link to="/" className="header-item"><img className="header_logo" src={logo} alt="logo" /></Link>
            <Link to="/posts/all" className="header-item">Posts</Link>
        </header>
    );
}

export default Header;