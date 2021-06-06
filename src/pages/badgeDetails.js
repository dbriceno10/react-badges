//Cuando el componente se encargar de presentar la información, es decir la interfaz, basta con colocar solo el nombre del componente, en cambio si va a trabahar con la lógica, es decir, traerlos datos por ejemplo, se le agrega container al nombre, esto era una convención en react para ese momento
import React from "react"

import Badge from "../componets/badge"
import { Link } from "react-router-dom" 
// import ReactDOM from "react-dom"
//import Modal from "../componets/modal"

import DeleteBadgeModal from "../componets/deleteBadgeModal"
import "./styles/BadgeDetails.css"
//import confLogo from "../images/platziconf-logo.svg"

//Hagamos nuestro propio custom hooks
// const useIncreaseCount = (max) => {
//     const [count, setCount] = React.useState(0)
//     if (count > max) {
//         setCount(0)
//     }
//     return[count, setCount]
// }
const BadgeDetails = (props) => {
    // const [count, setCount] = React.useState(0) //React.useState("argumentoOpcional") nos va a regresar un arreglo con dos argumentos, es parecido a state y setState, con la diferencia que los nombres que tienen dichas variables se las damos nosotros. Al useState le podemos pasar un argumento para inicializar, pero es totalmente opcional
    //const count = 3

    // const [count, setCount] = useIncreaseCount(4)

    //obtenemos el badge de la siguiente manera
    const badge = props.badge
    return (
        <React.Fragment>
            <div className="BadgeDetails__hero">
            <div className="container">
                <div className="row">
                {/* <div className="col-6">
                    <img src={confLogo} alt="Logo de la Conferencia" />
                </div> */}
                <div className="col-6 BadgeDetails__hero-attendant-name">
                    {/* <h1>
                    {badge.firstName} {badge.lastName}
                    </h1> */}
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
                <div className="col container-actions">
                <h2>Actions</h2>
                <div>
                    <div className="button-container">
                    {/* Vamos a añadir un botón contador */}
                    {/* <button onClick={() => {
                        setCount(count + 1)
                    }} className="btn btn-primary margin-right-4-global">
                        Increase Count: {count}
                    </button> */}
                    {/*De momento solo estamos usando el cambio de estado que nos da hooks para incrementar el contador, no el setState de la clase */}
                    <Link
                        className="btn btn-primary btn-action"
                        to={`/badges/${badge.id}/edit`}
                    >
                        Edit
                    </Link>
                    
    
                    
                    <button onClick={props.onOpenModal} className="btn btn-danger btn-action">Delete</button>
                    {/* {ReactDOM.createPortal(qué, dónde)} */}
                    {/* createPortal recibe dos argumentos, el qué voy a renderizar y dónde lo voy a renderizar, por ejemplo:
                    "modal", tendríamos que buscarlo dentro de nuestro public index.html, donde debemos crear un nuevo nodo, donde lo vamos a renderizar */}
                    <DeleteBadgeModal 
                            isOpen={props.modalIsOpen} 
                            onClose={props.onCloseModal}
                            onDeleteBadge={props.onDeleteBadge}
                        />
                        {/* Como DeleteBadgeModal va a tener todo su contenido pre-definido, lo volvemos una etiqueta autoconclusiva */}

                    </div>
                </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default BadgeDetails