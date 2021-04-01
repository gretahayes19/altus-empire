import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faHiking, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import '../../styles/footer.css'

const Footer = () => {

    return (
        <footer>
            <div className="footer-content">
                <div className="developer-profiles">
                    <h2 className="sentence">Start your journey with
                    <div className="slidingVertical">
                            <a href="https://www.linkedin.com/in/greta-hayes-4a5b4559/" target="_blank">Greta</a>
                            <a href="https://www.linkedin.com/in/hank-chen-0846841b6/" target="_blank">Hank</a>
                            <a href="https://www.linkedin.com/in/christine-yang-4204a67b/" target="_blank">Christine</a>
                            <a href="https://www.linkedin.com/in/kevinxmao/" target="_blank">Kevin</a>
                        </div>
                    </h2>
                </div>
                <div className="footer-logo">

                </div>
            </div>
        </footer>
    )
}

export default Footer