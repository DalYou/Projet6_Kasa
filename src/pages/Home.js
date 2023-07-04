import './Home.css';
import logementsJson from "../logements.json";
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Banner from '../components/Banner';

import BannerHome from "../assets/BannerHome.jpg"

//Page principales avec les photos des logements disponibles
function Home() {
  const [logements, setLogements] = useState ([]);
  useEffect(()=>{
    setLogements (logementsJson);
  },[])
  return (
    <div className="Home">
            <Header/>

      <Banner imgSrc={BannerHome} title={"Chez vous, partout et ailleurs"} />

      <ul className='announces_list'>
        {logements.map(logement => (
          <li key={logement.id}>
            <NavLink className="annonce_nav_link" to={"/annonce/"+logement.id}>
              <img src={logement.cover} alt={logement.title} />
              <div className='dark_filter'></div>
              <h2>{logement.title}</h2>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
