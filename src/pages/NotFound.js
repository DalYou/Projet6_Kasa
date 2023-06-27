import './NotFound.css';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';


function NotFound() {
  return (
    <div className="notFound_Container">
      <Header/> 
      <p className="notFound_Number">404</p>
      <p className="notFound_Text">Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="notFound_LinkHome">
				Retourner sur la page d’accueil
			</NavLink>
    </div>
  );
}

export default NotFound;
