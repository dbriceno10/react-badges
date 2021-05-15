import React from "react"
import ReactDOM from "react-dom"
import Badge from "./componets/badge"
import "bootstrap/dist/css/bootstrap.css"
import "./global.css"

const container = document.getElementById("app")

ReactDOM.render(<Badge />, container)
//A ReactDOM Siempre hay que darle un elemento, por lo tantolo que vamos a renderizar lo vamos a pasar entre brakets como una etiqueta autoconclusiva para asegurarnos







// const jsx = 
// <div>
//     <h1>Hola Soy Daniel</h1>
//     <p>Desarrollador frontend en formación</p>
// </div>

// const element = React.createElement("div", {}, React.createElement("h1", {}, "Hola Soy Daniel"), React.createElement("p", {}, "Soy un desarrollador frontend en formación"))
// const container = document.getElementById("app")

// ReactDOM.render(element, container)
