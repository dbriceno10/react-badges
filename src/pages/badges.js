import React from "react"
import "./styles/Badges.css"
//import Navbar from "../componets/navbar"
import ConfLogo from "../images/badge-header.svg"
import BadgesList from "../componets/badgesList"
import {Link} from "react-router-dom"
class Badges extends React.Component {
    // state = {
    //     data: [
    //         {
    //         id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
    //         firstName: "Freda",
    //         lastName: "Grady",
    //         email: "Leann_Berge@gmail.com",
    //         jobTitle: "Legacy Brand Director",
    //         twitter: "FredaGrady22221-7573",
    //         avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
    //         },
    //         {
    //         id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
    //         firstName: "Major",
    //         lastName: "Rodriguez",
    //         email: "Ilene66@hotmail.com",
    //         jobTitle: "Human Research Architect",
    //         twitter: "ajorRodriguez61545",
    //         avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
    //         },
    //         {
    //         id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
    //         firstName: "Daphney",
    //         lastName: "Torphy",
    //         email: "Ron61@hotmail.com",
    //         jobTitle: "National Markets Officer",
    //         twitter: "DaphneyTorphy96105",
    //         avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
    //         }
    //     ]
    // }

    constructor(props) {//El constructor recibe props, el cual necesitamos para inicializar la SuperClase
        super(props)
        console.log("1.constructor()")
        this.state = {
            data: [],//estado inicial vacío
        }
    }

    componentDidMount() {
        console.log("3.componentDidMount()")
        //setTimeout nos regresa un valor, un "id" que podemos caturar en una costante para cortar la llamada asíncrona en caso de ser necesario
        this.timeOutId = setTimeout(() => {//Actualización
            this.setState({
                data: [
                    {
                        id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                        firstName: "Freda",
                        lastName: "Grady",
                        email: "Leann_Berge@gmail.com",
                        jobTitle: "Legacy Brand Director",
                        twitter: "FredaGrady22221-7573",
                        avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
                    },
                    {
                        id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                        firstName: "Major",
                        lastName: "Rodriguez",
                        email: "Ilene66@hotmail.com",
                        jobTitle: "Human Research Architect",
                        twitter: "ajorRodriguez61545",
                        avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
                    },
                    {
                        id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                        firstName: "Daphney",
                        lastName: "Torphy",
                        email: "Ron61@hotmail.com",
                        jobTitle: "National Markets Officer",
                        twitter: "DaphneyTorphy96105",
                        avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                    }
                ]
            })
        }, 3000)

        
    }

    //junto a esa actualiación se llama a:
    componentDidUpdate(propsPrevios, estadoPrevio){
        console.log("5.componentDidUpdate")
        console.log({
            prevProps: propsPrevios, PrevState:estadoPrevio
        })

        console.log({
            props: this.props,
            state: this.state,

        })
    }
    // componentDidUpdate(prevProps, PrevState){
    //     console.log("5.componentDidUpdate")
    //     console.log({
    //         prevProps: prevProps, PrevState:PrevState
    //     })
    // }

    //Momento antes de que se vaya el componente de DOM
    componentWillUnmount() {
        console.log("6.componentWillUnmount")
        clearTimeout(this.timeOutId)//en caso de que la llamada asíncrona del setTimeOut se haya quedado pendiente, debido a que el componente fue desmontado antes de que los datos llegaran, clearTimeout va a cancelar el evío de esos datos, este tipo de medidad en casos similares es importante para evitar errores, y el consumo de datos cuando no es necesario y pueden consumir recursos en la app, es decir, estamos haciendo una limpieza de memoria. En el caso contrio, de que el componente no fuera desmontado, y los datos del setTimeOut fueran consumidos corectamente, estariamos pasando un id expirado, en cuyo caso no pasa absolutamente nada malo, es normal y no va a ocacionar ningún error
    }


    render() {
        console.log("2/4.render()")
        return (
            <React.Fragment>
                {/**<Navbar/>*/}
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={ConfLogo} alt="Conf Logo" />
                        </div>
                    </div>
                </div>


                <div className="Badge__container">
                    <div className="Badges__buttons">
                        {/* <a href="/badges/new" className="btn btn-primary">New Badge</a>
                        Para evitar el recargar la página completa vamos a sustituir el elemento a por un Link */}
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                    <div className="Badges__list">
                        <div className="Badges__container">
                        <BadgesList badges={this.state.data}/>
                            
                        </div>
                    </div>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default Badges