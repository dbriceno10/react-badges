import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import BadgeNew from "../pages/badgeNew"
import Badges from "../pages/badges"
//nos traemos BadgeNew y Badges para renderizar desde acá ahora

import Layout from "./layout"
import NotFound from "../pages/notFound"
import Home from "../pages/Home"

//Haremos el componente distinto, como una función, lo podemps hacer cuando no tengamos ningún otro método que hemos declarado, o no estemos usando estado

const App = () => {
    return (
        <Layout>
            <BrowserRouter>
                <Switch>{/**En esta versión, dentro de la etiqueta BrowserRouter solo podía exustir una etiqueta hijo, cosa que se podía evadir envolviendo todas nuestras rutas en una etiqueta div por ejemplo, esto parece haberse solucionado en versiones posteriores de react-router-dom (versión 5), aunque esto genera un error, al entrar a badges/new va a renderizar ambas páginas, esto se arregla con Switch, al patch hay que especificarle que la ruta es exacta para que funcione */}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route component={NotFound}/> {/**Esta sería una página de "Error404", si ningún elemento coincide con las rutas, tomará este componente de "error4" */}
                </Switch>
            </BrowserRouter>
        </Layout>
    )
}

export default App