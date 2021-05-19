import React from "react"
import Navbar from "../componets/navbar"
import header from "../images/badge-header.svg"
import "./styles/BadgeNew.css"
import Badge from "../componets/badge"
import BadgeForm from "../componets/badgeForm"

class BadgeNew extends React.Component {
    render() {
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName="Alejandro" 
                                lastName="Salazar" 
                                jobTitle="Frontend Engineer in Training"       
                                twitter="dbriceno10" 
                                avatarUrl = "https://media-exp1.licdn.com/dms/image/C5603AQFILCh7FRKErA/profile-displayphoto-shrink_200_200/0/1617145732921?e=1626307200&v=beta&t=lkVAqzsfDRPW5nmUDPnXEVA38bpJYTI6R8KKdqWlvxs" />
                        </div>
                        {/*Vamos a agregar otra columna que va a contener nuesto formulario */}
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew