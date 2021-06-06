import React from "react"

import "./styles/PageError.css"

import error500 from "../images/error-500.png"

function PageError(props) {
  // return <div className="PageError">❌{props.error.message}😱</div>;
  return (
    <div className="PageError">
      <img className="error-img" src={error500} alt="server-internal error" />
      <h1 className="h1-title">{props.error.message}, please reload the page.</h1>
    </div>
  )
}

export default PageError;
