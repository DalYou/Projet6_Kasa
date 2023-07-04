import { useState } from "react";
import "./Carousel.css";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Afficher les images des logements l'une après l'autre et pouvoir revenir à la première
const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const slidePrev = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(images.length - 1)
        } else {
            setCurrentImageIndex(currentImageIndex - 1)
        }
    }
    const slideNext = () => {
        if (currentImageIndex === images.length - 1) {
            setCurrentImageIndex(0)
        } else {
            setCurrentImageIndex(currentImageIndex + 1)
        }
    }
    return (
        <div className="Carousel">
            <div className="ctnr">
                
                <img src={images[currentImageIndex]} alt="" />
                <nav>
                    <button onClick={slidePrev}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button onClick={slideNext}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </nav>
                <p>{currentImageIndex+1}/{images.length}</p>
            </div>
        </div>
    )
}

export default Carousel;