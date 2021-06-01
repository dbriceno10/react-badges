import React from "react"
import ReactDOM from "react-dom"
import "./styles/Modal.css"

const Modal = (props) => {
    if (!props.isOpen) {
        return null
    }
    return (
        ReactDOM.createPortal(
            <div className="Modal">
                <div className="Modal__container">
                    <button onClick={props.onClose} className="Modal__close-button">X</button>
                    {props.children}
                    {/* Usar children nos pemite que en un futururo podamos especifiar de qué es este modal, ya que por el momento solo estamos usando componentes genéricos.
                    Esta técnica de usar componentes genéricos, para luego crear uno nuevo especializado se llama composición, y es una técnica muy poderosa que todo buen desarrollador debe aprender  */}
                </div>
            </div>
            , document.getElementById("modal")
        )
    )
}

export default Modal