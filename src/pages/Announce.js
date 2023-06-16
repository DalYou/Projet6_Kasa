import './Announce.css';
import logementsJson from "../logements.json";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';

function Announce() {
  const navigate = useNavigate();
  const urlParams = useParams();
  const [logement, setLogement] = useState({});

  const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
  const respect   = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  const service   = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  const securite  = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  
    useEffect(() => {
    const logement_ = logementsJson.find(logementJson => logementJson.id === urlParams.id)
    if (logement_) {
      setLogement(logement_)
      console.log(logement_);
    } else {
     navigate("/logement-non-trouve") 
    }
  },[urlParams.id])

}

  return (
    <div className="Announce">
      {logement && (
        <div>
          <Carousel images={logement.pictures}/>
          <h1>{logement.title}</h1>
          <h4>{logement.location}</h4>
          <div className="tags">
            {tagsLogement}
          </div>
    </div>
      );
      };
  );




export default Announce;
