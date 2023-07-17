import './Announce.css';
import logementsJson from "../logements.json";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import Host from '../components/Host';
import Rate from '../components/Rate';
import Collapse from '../components/Collapse';
import Header from '../components/Header';

//Affichage de tous les éléments sur les logements 
function Announce() {
  const navigate = useNavigate();
  const urlParams = useParams();
  const [logement, setLogement] = useState({});


  useEffect(() => {
    const logement_ = logementsJson.find(logementJson => logementJson.id === urlParams.id)
    if (logement_) {
      setLogement(logement_);
    } else {
      navigate("/logement-non-trouve")
    }
  }, [urlParams.id, navigate])


  return (
    <div className="Announce">
            <Header/> 

      {logement && (
        <div className="logement_container">
          
          {logement.pictures && (
              <Carousel images={logement.pictures} />
          )}
          <div className="logement_description">
            <div className='logement'>
              <h1>{logement.title}</h1>
              <h3>{logement.location}</h3>
                <ul className="tags">
                  {logement.tags && logement.tags.map((tag, i) => (
                    <li key={i} className="tag">{tag}</li>
                  ))}
                </ul>
            </div>
          <div className="logement_name_picture">
            <div className="host_container">
              {logement.host && (
                <Host 
                  hostName={logement.host.name}
                  hostPicture={logement.host.picture} 
                /> 
              )} 
            </div>
            <div className="rating_container">
              <Rate score={logement.rating} />
            </div>
          </div>
    </div>

          <div className="collapse_container">
            <div>
            <Collapse aboutTitle="Description">
              <p>{logement.description}</p>
            </Collapse>
            </div>
            <div>
            {logement.equipments && (
              <Collapse aboutTitle="Équipements">
              <ul className='logement-equipments-collapse'>
                {logement.equipments.map((equipment, i) => (
                  <li key={i}>{equipment}</li>
                ))}
              </ul>
            </Collapse>
            )}
            </div>
          </div>
        </div>
      )}
    </div>
  )

}

export default Announce;
