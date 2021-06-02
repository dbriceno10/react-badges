import React from "react"
import { Link } from "react-router-dom"
import "./styles/BadgesList.css"
import Gravatar from "./gravatar"
import "bootstrap/dist/css/bootstrap.css"
class BadgesListItem extends React.Component {
    render() {
        return (
            <div className="BadgesListItem">
                <Gravatar
                    className="BadgesListItem__avatar"
                    email={this.props.badge.email}
                />
                <div>
                    <b>
                        {this.props.badge.firstName} {this.props.badge.lastName}
                    </b>
                    <br />@{this.props.badge.twitter}
                    <br />
                    {this.props.badge.jobTitle}
                    </div>
            </div>
        );
    }
}

//Empaquetando en un costum hooks
const useSearchBadges = (badges) => {
    //vamos a usar el hook de useState
    const [ query, setQuery ] = React.useState("")

    //para filtrar vamos a utilizar la lista de los badges y el query

    // const filteredBadges = badges.filter(badge => {
    //     return`${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())//Si regregesa y true, es decir lo que se escribe conincide con la lista de badges, va a retornar eso. Aunque esto puede ser un cuello de botella para nuestra aplicación, cuando tenga miles de badges, podría consumir muchos recursos hacer este filtrado de esta forma
    // })
    //useMemo recibe dos argumentos, una función (anónima) y una lista (en nuestro caso son badges y quuery los que nos interesa). useMemo calcula un valor la primera vez, para la próxima vez hacer la busqueda con lo que ya se calculo primero, pero esta información hay que guardarla en una variable a la que podamos acceder luego fuera de useMemo, así que lo vamos a convertir en estado (React.useState)
    const [filteredBadges, setFilteredBadges] = React.useState(badges)
    React.useMemo(() => {
        const result = badges.filter(badge => {
            return`${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
        })

        setFilteredBadges(result)
    }, [badges, query])

    return { query, setQuery, filteredBadges }
}

const BadgesList = (props) => {
    const badges = props.badges

    const { query, setQuery, filteredBadges } = useSearchBadges(badges)

    // if (badges.length === 0) {
        if (filteredBadges.length === 0) {//ahora nos interesa que regrese los que concida con el filter
        return (
            <React.Fragment>
                <div className="form-group mb-4">
                    <label>Filter Badges</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={query}
                        onChange={(e) => {
                            console.log(e.target.value)
                            setQuery(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            </React.Fragment>
        );
    }

    return (
    <div className="BadgesList">
    <div className="form-group mb-4">
        <label>Filter Badges</label>
        <input 
            type="text" 
            className="form-control" 
            value={query}
            onChange={(e) => {
                console.log(e.target.value)
                setQuery(e.target.value)
            }}
        />
        {/* Este va a ser un imput controlado, necesitamos que cada vez que se escriba un valor, lo guarde para luego utilizarlo pasándolo a travez del value */}
    </div>
        <ul className="list-unstyled">
            {/* {badges.map(badge => { */}
            {filteredBadges.map(badge => {
                return (
                <li key={badge.id}>
                    <Link
                    className="text-reset text-decoration-none"
                    to={`/badges/${badge.id}`}
                    >
                    <BadgesListItem badge={badge} />
                    </Link>
                </li>
                );
            })}
        </ul>
    </div>
    );
    
}

export default BadgesList;
