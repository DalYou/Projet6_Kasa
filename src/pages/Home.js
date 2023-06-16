import './Home.css';
import logementsJson from "../logements.json";
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  const [logements, setLogements] = useState ([]);
  useEffect(()=>{
    setLogements (logementsJson);
  },[])
  return (
    <div className="Home">
      <h1>Chez vous, partout et ailleurs</h1>
      <ul>
        {logements.map(logement => (
          <li key={logement.id}>
            <NavLink to={"/annonce/"+logement.id}>
              <img src={logement.cover} alt={logement.title} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
