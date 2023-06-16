import { useState } from "react";
import "./Carousel.css";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/solid-svg-icons'

const Carousel = ({images}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState (0)
    const slidePrev = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(images.length-1)
        } else {
            setCurrentImageIndex (currentImageIndex-1)
        }
    }
    const slideNext = () => {
        if (currentImageIndex === images.length-1) {
            setCurrentImageIndex(0)
        } else {
            setCurrentImageIndex (currentImageIndex+1)
        }
    }
    return (  
        <div className="Carousel">
            <img src={images[currentImageIndex]} alt=""/>
            <button onClick={slidePrev}>Prev</button>
            <button onClick={slideNext}>Next</button>
        </div>
            )
        }
 
export default Carousel;