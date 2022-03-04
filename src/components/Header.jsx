import './Header.css'
import logo from "./logo.svg"

function Header(){
    return(
        <header>
            <div className='header'>
            <ul className="header_menu">
                <li className='header_logo'><a href=""><img src={logo} alt="logo"/></a></li>
                <li><a href="">Пункт меню</a></li>
                <li><a href="">Пункт меню</a></li>
                <li><a href="">Пункт меню</a></li>
                <li><a href="">Пункт меню</a></li>
                <li><a href="">Пункт меню</a></li>
            </ul>
            </div>
        </header>
    );
}

export default Header;