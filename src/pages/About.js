import Header from '../components/Header';
import './About.css';
import BannerAbout from "../assets/BannerAbout.jpg"
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
const securite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

function About() {
  return (
    <div className="About">
      <Header/>
      <Banner imgSrc={BannerAbout} /> 
    
      <section className='collapses_list'>
        <Collapse aboutTitle="Fiabilité">
          <p>{fiabilite}</p>
        </Collapse>

        <Collapse aboutTitle="Respect">
          <p>{respect}</p>
        </Collapse>

        <Collapse aboutTitle="Service">
          <p>{service}</p>
        </Collapse>

        <Collapse aboutTitle="Sécurité">
          <p>{securite}</p>
        </Collapse>
      </section>
    </div>
  );
}

export default About;
