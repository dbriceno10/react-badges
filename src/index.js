import React from "react"
import ReactDOM from "react-dom"
import Badge from "./componets/badge"
import BadgeNew from "./pages/badgeNew"
import "bootstrap/dist/css/bootstrap.css"
import "./global.css"

const container = document.getElementById("app")

ReactDOM.render(<BadgeNew 
    firstName="Alejandro" 
    lastName="Salazar" 
    jobTitle="Frontend Engineer in Training"       
    twitter="dbriceno10" 
    avatarUrl = "https://media-exp1.licdn.com/dms/image/C5603AQFILCh7FRKErA/profile-displayphoto-shrink_200_200/0/1617145732921?e=1626307200&v=beta&t=lkVAqzsfDRPW5nmUDPnXEVA38bpJYTI6R8KKdqWlvxs" />, container)

// ReactDOM.render(<Badge 
//     firstName="Alejandro" 
//     lastName="Salazar" 
//     jobTitle="Frontend Engineer in Training"       
//     twitter="dbriceno10" 
//     avatarUrl = "https://media-exp1.licdn.com/dms/image/C5603AQFILCh7FRKErA/profile-displayphoto-shrink_200_200/0/1617145732921?e=1626307200&v=beta&t=lkVAqzsfDRPW5nmUDPnXEVA38bpJYTI6R8KKdqWlvxs" />, container)
//A ReactDOM Siempre hay que darle un elemento, por lo tantolo que vamos a renderizar lo vamos a pasar entre brakets como una etiqueta autoconclusiva para asegurarnos







// const jsx = 
// <div>
//     <h1>Hola Soy Daniel</h1>
//     <p>Desarrollador frontend en formación</p>
// </div>

// const element = React.createElement("div", {}, React.createElement("h1", {}, "Hola Soy Daniel"), React.createElement("p", {}, "Soy un desarrollador frontend en formación"))
// const container = document.getElementById("app")

// ReactDOM.render(element, container)
