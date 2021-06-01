import React from "react"
import PageLoading from "../componets/pageLoading"
import PageError from "../componets/pageError"
import api from "../api"
import BadgeDetails from "../pages/badgeDetails"
class BadgeDetailsContainer extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false,
        // data: {},
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
            
        try {
            //debemos pasar el id que lo obtenemos desde la url con this.props.match.params.badgeID
            const data = await api.badges.read(
                this.props.match.params.badgeId
            ) 
            this.setState({ loading: false, data: data })//si conseguimos los datos los vamos a guardar acá
        } catch(error) {
            this.setState({ loading: false, error: error })
        }
    }

    handleOpenModal = e => {
this.setState({ modalIsOpen: true,})
    }

    handleCloseModal = e => {
        this.setState({ modalIsOpen: false,})
    }

    handleDeleteBadge = async e => {
        this.setState({ loading: true, error: null })

        try {
            await api.badges.remove(
                this.props.match.params.badgeId//recuerda que el id del badge lo obtenemos de la URL a travez de params
            )
            this.props.history.push("/badges")//Esteprops no los da react-router, lo usamos para sacar al usuario de la página actual, modificando la URL insertando "/badges"
            this.setState({ loading: false })
        } catch(error) {
            this.setState({ loading: false, error: error})
        }
    }

    render() {
        if (this.state.loading) {
        return <PageLoading />;
        }
    
        if (this.state.error) {
        return <PageError error={this.state.error} />;
        }
    
        const badge = this.state.data;
    
        return (
        <BadgeDetails
            onCloseModal={this.handleCloseModal}
            onOpenModal={this.handleOpenModal}
            modalIsOpen={this.state.modalIsOpen}
            onDeleteBadge={this.handleDeleteBadge}
            badge={badge} />
        )
    }
}

export default BadgeDetailsContainer