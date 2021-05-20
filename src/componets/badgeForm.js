import React from "react"
//  

class BadgeForm extends React.Component {
    //para evitar que lance un error, al entrar a la página va a atratar de leer lo que esté en los campos, si no se ha ingresado nada va a tirar un error de l tipo no se puede leer "firstName of null", por ejemplo, por lo tanto hay que inicializar el estado
    //La inicialización se puede hacer en cualquier línea dentro de nuestro componente, pero lo, por buenas prácticas, es hacerlo al inicio
    // state = {} // creamos es estado simplemente pasandole un objeto vacío
    //ahora vamos a inicializar con un arreglo pero de campos "vacíos"
    // state = {//este se puede inicializar con campos vacíos o algún campo colocado por defecto el cual el usuaro va a poder cambiar cuando escriba en los 
        // firstName: "",
        // lastName: "",
        // email: "",
        // jobTitle: "",
        // twitter: ""
    // }
    // handleChange = (e) =>{
    //     // console.log({e}) //Recordar que cuando se trabaja con react, muchas cosas se van a manejar como si de objetos se tratasen
    //     // console.log({
    //     //     name: e.target.name,
    //     //     value: e.target.value})
    //     this.setState({//función de la clase component llamada setState, nos sirve paraguardar información
    //         // firstName: e.target.value, // en lugar de guardar todo en first name, vamos a pasar una llave, una variable para guardar la 
    //         [e.target.name]: e.target.value,
    //     })
    // }
    //handleChange, el cuál es el método que maneja la información del evento lo vamos a eliminar de acá, puesto que ahora esto se va a manejar desde la página, es decir, BadgeNew
    handleClick = (e) =>{
        e.preventDefault()
        console.log("El formulario fue enviado")
        console.log(this.state)
    }

    handleSubmit = (e) =>{
        console.log("Click en el botón")
    }
    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Frist Name</label>
                        <input 
                            onChange={this.props.onChange}  
                            className="form-control" 
                            type="text" 
                            name="firstName"
                            value={this.props.formValues.firstName}
                        />
                        {/*Eventos con react, en un imput cuando escribimos, obtenemos un evento onChange, la vamos a manejar con un método de la clase que se debe crear, suele llamarse handleChange */}
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input 
                            onChange={this.props.onChange}  
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            value={this.props.formValues.lastName}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input 
                            onChange={this.props.onChange}  className="form-control" 
                            type="email" 
                            name="email"
                            value={this.props.formValues.email}
                        />
                    </div>
                    <div>
                        <label>Job Title</label>
                        <input 
                            onChange={this.props.onChange}  
                            className="form-control" 
                            type="text" 
                            name="jobTitle"
                            value={this.props.formValues.jobTitle}
                        />
                        <div>
                        <label>Twitter</label>
                        <input 
                            onChange={this.props.onChange}  
                            className="form-control" 
                            type="text" 
                            name="twitter"
                            value={this.props.formValues.twitter}
                        />
                    </div>
                    </div>
                    <button type="button" onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm