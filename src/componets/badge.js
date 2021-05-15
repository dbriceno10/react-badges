import React from "react"
import confLogo from "../images/logo.svg"
class Badge extends React.Component {
    // render() {
    //     return (
    //         <h1>Badge</h1>
    //     )
    // }
    // render() {
    //     const view = <h1>Badge</h1>
    //     return view
    // }
    render() {
            return (
                <div>
                    <div>
                        <img src={confLogo} alt="Logo"/>
                    </div>

                    <div>
                        <img src="https://gravatar.com/avatar?d=identicon" alt="Avatar"/>
                        <h1>Daniel <br/> Briceño</h1>
                    </div>

                    <div>
                        <p>Frontend Engineer in Training</p>
                        <p>@dbriceno10</p>
                        <p>#platziconfig</p>
                    </div>
                </div>
            )
        }
}

export default Badge