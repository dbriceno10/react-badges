import React from "react"
import { Link } from "react-router-dom"
import "./styles/BadgesList.css"
import Gravatar from "./gravatar"
import "bootstrap/dist/css/bootstrap.css"
class BadgesList extends React.Component{
    render(){
        if(this.props.badges.length === 0) {
            return(
                <div>
                    <h3>No se encontro ningún dato</h3>
                    <Link className="btn btn-pimary" to="/badges/new">Crear Nuevo Badge</Link>
                </div>
            )
        }
        return (
            <ul className="list-unstyled BadgesList">
                {this.props.badges.map((badge)=>{
                return(
                    <li key={badge.id} className="BadgesListItem">
                        <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                            <Gravatar
                                className="BadgesListItem__avatar"
                                email={badge.email}
                                />
                            <div>
                                <div><strong>{badge.firstName} {badge.lastName}</strong></div>
                                <div className="Twitter__name">
                                <span className="Twitter__logo"></span>@{badge.twitter}
                                </div>
                                <div>{badge.jobTitle}</div>
                            </div>
                        </Link>
                    </li>
                )
                })}
            </ul>
        )
    }
}

export default BadgesList