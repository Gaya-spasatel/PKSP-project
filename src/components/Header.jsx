import './Header.css'
import logo from "./images/logo.svg"

function Header(){
    return(
        <header className={"header"}>
            <ul className="header_menu">
                <li><a href="" className='header_logo'><img src={logo} alt="logo"/></a></li>
                <li><a href="">Пункт меню</a></li>
                <li><a href="">Пункт меню</a></li>
                <li><a href="">Пункт меню</a></li>
                <li><a href="">Пункт меню</a></li>
                <li><a href="">Пункт меню</a></li>
            </ul>

        </header>
    );
}

export default Header;