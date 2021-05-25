import React from "react"
import { Link } from "react-router-dom"
import "./styles/BadgesList.css"
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
                        <img src={badge.avatarUrl} alt={`${badge.firstName} ${badge.lastName}`} className="BadgesListItem__avatar"/>
                        <div>
                            <div><strong>{badge.firstName} {badge.lastName}</strong></div>
                            <div className="Twitter__name">
                            <span className="Twitter__logo"></span>@{badge.twitter}
                            </div>
                            <div>{badge.jobTitle}</div>
                        </div>
                    </li>
                )
                })}
            </ul>
        )
    }
}

export default BadgesList