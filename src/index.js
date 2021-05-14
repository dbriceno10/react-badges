import React from "react"
import ReactDOM from "react-dom"
//const jsx = <h1>Hola mundo utilizando React</h1>//ersto es gracias a JSX, para poder hacer esto así siempre hay que importar react y react-dom
//const element = React.createElement("a", {href: "https://www.campusmvp.es/recursos/post/webpack-que-es-para-que-sirve-y-sus-ventajas-e-inconvenientes.aspx", target: "_blank"}, "Aprende Webpack")//Tiene 3 argumentos, el primero es el tipo de elemento (etiqueta de HTML) a crear, el segundo son los argumentos,y el tercero es el "children", parecido al "innerText", es decir, el contenido de la etiqueta, si es el caso
const name = "Daniel"
//const element = React.createElement("h1", {}, `Hola, soy ${name}`)
//const jsx = <h1>Hola, soy {_expresiones_}</h1>//se puede insertar una  variable directamente sin usar el template o $, aunque no solo pueden ser variables, también expresiones en las cuales javascript va a resolver, como 2 + 2 por ejemplo, una función, etc

const jsx = 
<div>
    <h1>Hola Soy Daniel</h1>
    <p>Desarrollador frontend en formación</p>
</div>

const element = React.createElement("div", {}, React.createElement("h1", {}, "Hola Soy Daniel"), React.createElement("p", {}, "Soy un desarrollador frontend en formación"))
const container = document.getElementById("app")

ReactDOM.render(element, container)
