import "./Banner.css";

const Banner = ({imgSrc, title}) => {
    return (  
        <div className="Banner">
            <div className="banner_filter_black"></div>
            <img src={imgSrc} alt="En-tête de la page"/> 
            {title && <h1>{title}</h1>}//Titre
        </div>
            )
        }
 
export default Banner;