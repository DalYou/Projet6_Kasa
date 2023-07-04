import emptyStar from "../assets/star-empty.png";
import fullStar from "../assets/star-full.png";
import "./Rate.css";

//étoiles mesurant le niveau de qualité du logement
function Rate ({score}) {
    return (
        <div className="Rate">
            {["", "", "", "", ""].map((_, i) => (
                <div key={i}>
                    {i < score ? <img src={fullStar} alt="Etoile pleine"/> : <img src={emptyStar} alt="Etoile vide"/>}
                </div>
            ))}
        </div>
    )
}

export default Rate;