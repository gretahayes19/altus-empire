import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faHiking, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Footer = () => {

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <Link to="/">
                        <FontAwesomeIcon icon={faMountain} className="footer-mountain-logo" />
                        <h2>AllTreks</h2>
                    </Link>
                </div>
                <div className="footer-logo">

                </div>
            </div>
        </footer>
    )
}

export default Footer