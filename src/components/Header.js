import "./Header.css";
import Logo from "../assets/LOGO.jpg";

function Header () {
    return (
        <header className='Header'>
        <img src={Logo} alt='Kasa'/>
          <nav>
            <ul className='liens'>
              <li>
                <a href="" className="lien">Accueil</a>
              </li>
              <li>
                <a href="" className="lien">A propos</a>
              </li>
            </ul>
          </nav>
      </header>
    )
}

export default Header;