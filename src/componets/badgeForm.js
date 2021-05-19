import React from "react"
//  

class BadgeForm extends React.Component {
    handleChange = (e) =>{
        // console.log({e}) //Recordar que cuando se trabaja con react, muchas cosas se van a manejar como si de objetos se tratasen
        console.log({
            name: e. target.name,
            value: e.target.value})
    }
    handleClick = (e) =>{
        e.preventDefault()
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
                        <input onChange={this.handleChange}  className="form-control" type="text" name="firstName"/>
                        {/*Eventos con react, en un imput cuando escribimos, obtenemos un evento onChange, la vamos a manejar con un método de la clase que se debe crear, suele llamarse handleChange */}
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm