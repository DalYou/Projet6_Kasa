import "./Header.css";
import Logo from "../assets/LOGO.jpg";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <header className='Header'>
      <img src={Logo} alt='Kasa' />
      <nav>
        <ul className='links'>
          <li>
            <NavLink className={({ isActive, isPending }) =>
              isActive ? "header_link link_active" : "header_link"
            } to={"/"}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive, isPending }) =>
              isActive ? "header_link link_active" : "header_link"
            } to={"/a-propos"}>
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;