import Logo from "../assets/LOGO-footer.png";
import "./Footer.css";

const Footer = () => {
    return ( 
        <footer className="footer_container">
			<img src={Logo} alt="logo de kasa" /> 
			<p className="footer_text">© 2020 Kasa. All rights reserved</p>
		</footer>
     );
}
 
export default Footer;