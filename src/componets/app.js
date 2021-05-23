import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import BadgeNew from "../pages/badgeNew"
import Badges from "../pages/badges"
//nos traemos BadgeNew y Badges para renderizar desde acá ahora

//Haremos el componente distinto, como una función, lo podemps hacer cuando no tengamos ningún otro método que hemos declarado, o no estemos usando estado

function App() {
    return (
        <BrowserRouter>
            <div>{/**En esta versión, dentro de la etiqueta BrowserRouter solo podía exustir una etiqueta hijo, cosa que se podía evadir envolviendo todas nuestras rutas en una etiqueta div por ejemplo, esto parece haberse solucionado en versiones posteriores de react-router-dom (versión 5) */}
                <Route path="/badges" component={Badges} />
                <Route path="/badges/new" component={BadgeNew} />
            </div>
        </BrowserRouter>
    )
}

export default App