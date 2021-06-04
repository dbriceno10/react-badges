import React from "react"
import "./styles/Badges.css"
import ConfLogo from "../images/ingress4.png"
import ReactLogo from "../images/react-logo3.svg"
// import ConfLogo from "../images/space.png"
import BadgesList from "../componets/badgesList"
import {Link} from "react-router-dom"
import api from "../api"
import PageLoading from "../componets/pageLoading"
import PageError from "../componets/pageError"
import MiniLoader from "../componets/miniLoader"
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

    //console.log("3.componentDidMount()")
        //Este componente es el lugar adecuado para realizar una petición de datos, o actualización
    componentDidMount() {
        this.intervalID = setInterval(this.fetchData, 10000)//Hay que cancelarlo cuando la página se vaya
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
        //con esto evitamos que el intervalo siga trabajando aún cuando dejamos la página
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
    // componentDidUpdate(propsPrevios, estadoPrevio){
    //     console.log("5.componentDidUpdate")
    //     console.log({
    //         prevProps: propsPrevios, PrevState:estadoPrevio
    //     })

    //     console.log({
    //         props: this.props,
    //         state: this.state,

    //     })
    // }
    // componentDidUpdate(prevProps, PrevState){
    //     console.log("5.componentDidUpdate")
    //     console.log({
    //         prevProps: prevProps, PrevState:PrevState
    //     })
    // }

    //Momento antes de que se vaya el componente de DOM
    // componentWillUnmount() {
    //     //console.log("6.componentWillUnmount")
    // }


    render() {
        //console.log("2/4.render()")
        //manejar cuando loading = true
        // if(this.state.loading === true && this.state.data === undefined) {
        //     return <PageLoading />
        // }
        if(this.state.loading === true && !this.state.data) {//Pide los datos de forma automática, la primera vez
            return <PageLoading />
        }

        if(this.state.error) {//this.state.error === true 
            //return `Error: ${this.state.error.message}`
            return <PageError error={this.state.error} />
        }
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <div className="badge-logos-container">
                                <img className="Badges_conf-logo Badges_conf-logo-width" src={ConfLogo} alt="Conf Logo" />
                                <img className="Badges_conf-logo react-logo" src={ReactLogo} alt="Logo de React js" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Badges__hero">
                    <div className="Badges__container">
                        <div className="Badges__buttons">
                            {/* <a href="/badges/new" className="btn btn-primary">New Badge</a>
                            Para evitar el recargar la página completa vamos a sustituir el elemento a por un Link */}
                            <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                        </div>
                        <div className="Badges__list">
                            <div className="Badges__container">
                                <BadgesList badges={this.state.data}/>
                                {/* Añadimos un indicador si está en loading */}
                                {this.state.loading && <MiniLoader/>}
                            
                            </div>
                        </div>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges