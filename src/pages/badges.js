import React from "react"
import "./styles/Badges.css"
//import Navbar from "../componets/navbar"
import ConfLogo from "../images/badge-header.svg"
import BadgesList from "../componets/badgesList"
import {Link} from "react-router-dom"
import api from "../api"
//NOTA: Borré algunas notas sobre el ciclo de vida de los componentes, si quieres revisarlos regresa a ese commit o ve la notas
class Badges extends React.Component {
    state = {//ahora vamos a traer los datos desde la api, se inicializan como undefinded
        loading: true,
        error: null,
        data: undefined
    }

    // constructor(props) {//El constructor recibe props, el cual necesitamos para inicializar la SuperClase
    //     super(props)
    //     console.log("1.constructor()")
    //     this.state = {
    //         data: [],//estado inicial vacío
    //     }
    // }

    componentDidMount() {
        //console.log("3.componentDidMount()")
        //Este componente es el lugar adecuado para realizar una petición de datos, o actualización
        this.fetchData()
    }

    //Este fetchData al que hacemos referencia (con this) es un método de la clase que estamos declarando, no el fetch nativo de javascript
    fetchData = async () => {
        this.setState({ loading: true, error: null })//Declaramos el estado de loading en true y error en null, si no es la primera vez que se llama, se vuelve a pasar loading como true, y si existía un error este se cancela

        try {
            const data = await api.badges.list()
            this.setState({ loading: false, data: data })//si obtenemos los datos los guardamos
        } catch(error) {
        this.setState({ loading: false, error: error })
        }
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
        //console.log("6.componentWillUnmount")
    }


    render() {
        console.log("2/4.render()")
        //manejar cuando loading = true
        if(this.state.loading === true) {
            return "Loading..."
        }

        if(this.state.error) {//this.state.error === true 
            return `Error: ${this.state.error.message}`
        }
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