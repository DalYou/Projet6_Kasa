import "./Banner.css";

//Bannière apparente sur toutes les pages
const Banner = ({imgSrc, title}) => {
    return (  
        <div className="Banner">
            <div className="banner_filter_black"></div> {/* Filtre*/}
            <img src={imgSrc} alt="En-tête de la page"/> 
            {title && <h1>{title}</h1>}//Titre
        </div>
            )
        }
 
export default Banner;