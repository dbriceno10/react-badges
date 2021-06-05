import React from "react"
//import Navbar from "../componets/navbar"
// import header from "../images/platziconf-logo.svg"
//import header from "../images/ingress5.png"
import "./styles/BadgeNew.css"
import Badge from "../componets/badge"
import BadgeForm from "../componets/badgeForm"
import api from "../api"
import PageLoading from "../componets/pageLoading"
class BadgeNew extends React.Component {
        state = { 
            loading: false,//este loading se inicializa en falso debido a que estamos enviando los datos
            error: null,
            form: {
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            twitter: ""
        } 
    }//inicializamos un state vacio, con una propiedad form también vacía
    
    
    //form va a recibir y guardar la infomación del evento que acaba de ocurrir, esta información ahora le va a pertenecer a BadgeNew
    
    handleChange = e => {//para evitar que los datos del formulario se sobreestciban, vamos a "dejar caer" todos los valores que tenia el form anteriormente, y añadimos otro o sobre escribimos el que ya estaba guardado, usando los puntos suspensivos "..." que indica propagación de la propiedad (prop)
        this.setState({
            form: {
                ...this.state.form,
            [e.target.name]: e.target.value,
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null })

        try {
            await api.badges.create(this.state.form)
            this.setState({ loading: false })

            //Si hay existo, hacer que al guardar el badge en el formulario nos vayamos directamente a la página de la lista, recoerda que las páginas reciben 3 props, match, history y location
            this.props.history.push("/badges")

        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }
    
    render() {
        if (this.state.loading) {
            return <PageLoading />
        }
        return(
            <React.Fragment>
                {/**<Navbar/>*/}
                <div className="BadgeNew__hero">
                    {/* <img className="BadgeNew__hero-img img-fluid" src={header} alt="Logo"/> */}
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName={this.state.form.firstName || "First Name"} 
                                lastName={this.state.form.lastName || "Last Name"} 
                                jobTitle={this.state.form.jobTitle || "Job Title"}       
                                twitter={this.state.form.twitter || "Twitter"}
                                email={this.state.form.email}
                                avatarUrl = "https://media-exp1.licdn.com/dms/image/C5603AQFILCh7FRKErA/profile-displayphoto-shrink_200_200/0/1617145732921?e=1626307200&v=beta&t=lkVAqzsfDRPW5nmUDPnXEVA38bpJYTI6R8KKdqWlvxs" />
                        </div>
                        <div className="col-6">
                            <h1>New Attendant</h1>
                            {/**Ahora esta información del evento se la vamos a pasar a BadgeForm como un prop, para que el formulario tenga acceso al evento y acceda a la inforación.
                            Hay que pasar los varlores del formulario desde BadgeNew hasta BadgeForm */}
                                <BadgeForm 
                                    onChange={this.handleChange}
                                    onSubmit={this.handleSubmit}
                                    formValues={this.state.form}
                                    error={this.state.error}//el error no siempre va a estar definido, puede ser un vacío, nulo, etc, depende de lo que regrese como error,en caso de haberlo
                                />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew