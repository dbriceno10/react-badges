// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

// import React from 'react';
// import ReactDOM from 'react-dom';

// const element = <h1>Hello, Platzi Badges!</h1>;

// const container = document.getElementById('app');

// // ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(element, container);

import React from "react"
import ReactDOM from "react-dom"

const element = <h1>Hola mundo utilizando React</h1>//ersto es gracias a JSX, para poder hacer esto así siempre hay que importar react y react-dom
const container = document.getElementById("app")

ReactDOM.render(element, container)
