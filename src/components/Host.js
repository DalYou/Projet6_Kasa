import "./Host.css";

//Photo et nom en lien avec le logement
const Host = (props) => {
    return (
    <aside className="host_container">
        <div className="host_name">{props.hostName}</div>
        <div className="host_Picture">
            <img src={props.hostPicture} alt={props.id} />
        </div>
    </aside>
     );
}
 
export default Host;
