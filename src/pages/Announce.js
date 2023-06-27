import './Announce.css';
import logementsJson from "../logements.json";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import Host from '../components/Host';
import Rate from '../components/Rate';
import Collapse from '../components/Collapse';
import Header from '../components/Header';

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
          <div className='logement'>
            <h1>{logement.title}</h1>
            <h3>{logement.location}</h3>
            <div className="tags">
              <p>{logement.tags}</p>
            </div>

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
          <div className="collapse_container">
            
            <Collapse aboutTitle="Description">
              <p>{logement.description}</p>
            </Collapse>

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
      )}
    </div>
  )

}

export default Announce;
