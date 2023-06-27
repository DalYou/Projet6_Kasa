import { useState } from "react";
import "./Collapse.css";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


const Collapse = ({children, aboutTitle}) => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(!visible);
    };

    return ( 
        <div className="Collapse">
            <div className="collapse_header">
                <h2>{aboutTitle}</h2>
                <button onClick={toggleVisible}>
                {visible ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                </button>
            </div>
            {visible && (
                <div className="collapse_content">
                    {children}
                </div>
            )}
            
        </div>
     );
}
 
export default Collapse;