//Cuando el componente se encargar de presentar la información, es decir la interfaz, basta con colocar solo el nombre del componente, en cambio si va a trabahar con la lógica, es decir, traerlos datos por ejemplo, se le agrega container al nombre, esto era una convención en react para ese momento
import React from "react"
import confLogo from "../images/platziconf-logo.svg"
import "./styles/BadgeDetails.css"
import Badge from "../componets/badge"
import { Link } from "react-router-dom" 
import ReactDOM from "react-dom"

const BadgeDetails = (props) => {
    //obtenemos el badge de la siguiente manera
    const badge = props.badge
    return (
        <div>
            <div className="BadgeDetails__hero">
            <div className="container">
                <div className="row">
                <div className="col-6">
                    <img src={confLogo} alt="Logo de la Conferencia" />
                </div>
                <div className="col-6 BadgeDetails__hero-attendant-name">
                    <h1>
                    {badge.firstName} {badge.lastName}
                    </h1>
                </div>
                </div>
            </div>
            </div>
    
            <div className="container">
            <div className="row">
                <div className="col">
                <Badge
                    firstName={badge.firstName}
                    lastName={badge.lastName}
                    email={badge.email}
                    twitter={badge.twitter}
                    jobTitle={badge.jobTitle}
                />
                </div>
                <div className="col">
                <h2>Actions</h2>
                <div>
                    <div>
                    <Link
                        className="btn btn-primary mb-4"
                        to={`/badges/${badge.id}/edit`}
                    >
                        Edit
                    </Link>
                    </div>
    
                    <div>
                    <button className="btn btn-danger">Delete</button>
                    {/* {ReactDOM.createPortal(qué, dónde)} */}
                    {/* createPortal recibe dos argumentos, el qué voy a renderizar y dónde lo voy a renderizar, por ejemplo:
                    "modal", tendríamos que buscarlo dentro de nuestro public index.html, donde debemos crear un nuevo nodo, donde lo vamos a renderizar */}
                    {ReactDOM.createPortal(
                        <h1>Hola, realmente no estoy aquí</h1>, document.getElementById("modal")
                    )}

                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default BadgeDetails