import React from "react"
//import Navbar from "../componets/navbar"
import header from "../images/platziconf-logo.svg"
import "./styles/BadgeNew.css"
import Badge from "../componets/badge"
import BadgeForm from "../componets/badgeForm"
import api from "../api"
class BadgeNew extends React.Component {
    state = { form: {
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        twitter: ""
    } }//inicializamos un estado vación, con una propiedad form también vacía
    // handleChange = e => {
    //     const nextForm = this.state.form
    //     nextForm[e.target.name] = e.target.value
    //     this.setState({
    //         //form: {//form va a recibir y guardar la infomación del evento que acaba de ocurrir, esta información ahora le va a pertenecer a BadgeNew
    //             //[e.target.name]: e.target.value// el problema aquí es que cada vez que se introduzca una nueva información, va a sobre escribir la anterior, existen dos maneras de solucionarlo, la primera es hacer una copia del estado del form

    //         //}
    //         form: nextForm,// esta es la primera forma
    //     })
    // }
    handleChange = e => {//segunda manera, vamos a "dejar caer" todos los valores que tenia el form anteriormente, y añadimos otro o sobre escribimos el que ya estaba guardado, usando los puntos suspensivos "..." que indica propagación de la propiedad (prop)
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
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }
    
    render() {
        return(
            <React.Fragment>
                {/**<Navbar/>*/}
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-img img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/*En el formulario vamos a usar el condicional OR para darle a los campos un valor por Omición o predefinido que puede ser cambiado luego*/}
                            <Badge
                                firstName={this.state.form.firstName || "First Name"} 
                                lastName={this.state.form.lastName || "Last Name"} 
                                jobTitle={this.state.form.jobTitle || "Job Title"}       
                                twitter={this.state.form.twitter || "Twitter"}
                                email={this.state.form.email}
                                avatarUrl = "https://media-exp1.licdn.com/dms/image/C5603AQFILCh7FRKErA/profile-displayphoto-shrink_200_200/0/1617145732921?e=1626307200&v=beta&t=lkVAqzsfDRPW5nmUDPnXEVA38bpJYTI6R8KKdqWlvxs" />
                        </div>
                        {/*Vamos a agregar otra columna que va a contener nuesto formulario */}
                        <div className="col-6">
                        {/**Ahora esta información del evento se la vamos a pasar a BadgeForm como un prop, para que el formulario tenga acceso al evento y acceda a la inforación.
                        Hay que pasar los varlores del formulario desde BadgeNew hasta BadgeForm */}
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew