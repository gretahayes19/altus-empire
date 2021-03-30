import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";

const Marker = (props) => {
    return (
        <div>
            <FontAwesomeIcon icon={faCannabis} />
            {props.show ? <h1>h1</h1> : ""}
        </div>
    )
}

export default Marker;