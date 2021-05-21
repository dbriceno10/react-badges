import React from "react"

class BadgesList extends React.Component {
render () {
    return (
        <ul className="list-unstyled">
            {this.props.badges.map((badge) =>
            {
                return(
                    //Cada elemento de la lista debe deter un prop key o identificador
                    <li key={badge.id}>
                        <p>
                            {badge.firstName}  {badge.lastName}
                        </p>
                    </li>
                )
            })}
        </ul>
    )
}
}

export default BadgesList