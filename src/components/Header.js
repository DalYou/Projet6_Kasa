import "./Header.css";
import Logo from "../assets/LOGO.jpg";
import { NavLink } from "react-router-dom";

//Header présent sur toutes les pages
function Header() {
  return (
    <header className='Header'>
      <img src={Logo} alt='Kasa' />
      <nav>
        <ul className='links'> {/*lien vers les autres pages */}
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