import React from "react"
import "./styles/Badge.css"
import confLogo from "../images/badge-header.svg"
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
            return (//Recordar que al trabajar con react al aplicar clases de css colocarlas con la palabra className en lugar de class
                <div className="Badge">
                    <div className="Badge__header">
                        <img src={confLogo} alt="Logo"/>
                    </div>

                    <div className="Badge__section-name">
                        <img className="Badge__avatar" src="https://media-exp1.licdn.com/dms/image/C5603AQFILCh7FRKErA/profile-displayphoto-shrink_200_200/0/1617145732921?e=1626307200&v=beta&t=lkVAqzsfDRPW5nmUDPnXEVA38bpJYTI6R8KKdqWlvxs" alt="Avatar"/>
                        <h1>Daniel <br/> Briceño</h1>
                    </div>

                    <div className="Badge__section-info">
                        <h3>Frontend Engineer in Training</h3>
                        <div>@dbriceno10</div>
                        
                    </div>
                    <div className="Badge__footer">
                        <p>#platziconfig</p>
                    </div>
                </div>
            )
        }
}

export default Badge