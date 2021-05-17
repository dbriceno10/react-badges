import React from "react"
import "./styles/Badge.css"
import confLogo from "../images/badge-header.svg"
class Badge extends React.Component {
    // render() {
    //     const view = (<h1>Badge</h1>)
    //     return view
    // }
    render() {
        const {
            firstName,
            lastName,
            avatarUrl,
            jobTitle,
            twitter
            } = this.props
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo"/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={avatarUrl} alt="Avatar"/>
                    <h1>{firstName} <br/>{lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{jobTitle}</h3>
                    <div>@{twitter}</div>
                    
                </div>
                <div className="Badge__footer">
                    <p>#platziconfig</p>
                </div>
            </div>
        )
    }
}

export default Badge