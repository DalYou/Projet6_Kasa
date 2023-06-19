import Logo from "../assets/LOGO.jpg";

const Footer = () => {
    return ( 
        <footer className="footer-container">
			<img src={Logo} alt="logo de kasa" />
			<p className="footer_text">© 2020 Kasa. All rights reserved</p>
		</footer>
     );
}
 
export default Footer;