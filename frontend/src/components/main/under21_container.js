import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import "../../styles/under21_main.css";

class Under21 extends React.Component {

    // handleKey(e) {
    //     debugger;
    //     e.stopPropagation();
    //     console.log(e.target)
    //     let policecar = e.target;
    //     let move = 10; 

    //     switch (e.key) {
    //         case 'ArrowUp':
    //             policecar.style.top = `${parseInt(policecar.style.top) - move}px`;
    //             break;
    //         case 'ArrowDown':
    //             policecar.style.top = `${parseInt(policecar.style.top) + move}px`;
    //             break;
    //         case 'ArrowLeft':
    //             policecar.style.left = `${parseInt(policecar.style.left) - move}px`;
    //             break;
    //         case 'ArrowRight':
    //             policecar.style.left = `${parseInt(policecar.style.left) + move}px`;
    //             break;
    //     }
    // };

    render() {
        return (
            <div className="under-21-main-div">
                <div className="under-21-div">
                    <p className="under-21-notice">Sorry! You are not of age to sign up.</p>
                    {/* <p className="under-21-info"> */}
                        If you or someone you may know is experiencing pain,
                        Cannabidiol(CBD) oil may be a possible alternative.
                    {/* </p> */}
                    <div className="under-21-info">
                        <ul className="under-21-ul">CBD oil has been known to help treat:
                            <li className="under-21-li">Anxiety</li>
                            <li className="under-21-li">Epilepsy</li>
                            <li className="under-21-li">Chronic Pain</li>
                        </ul>
                    </div>
                    <p className="under-21-links">
                        <a href="https://www.google.com/search?q=legalization+of+cannabis&oq=legalization+of+cannabis&aqs=chrome..69i57.4613j1j4&sourceid=chrome&ie=UTF-8">
                            Read more about the legalization of cannabis here
                        </a>
                    </p>
                    <p className="under-21-links">
                        <a href="https://www1.nyc.gov/site/nypd/services/victim-services/how-to-report-a-crime.page">
                            See something say something 
                        </a>
                    </p>
                </div>
                <div id="policecar" style={{fontSize:"100px"}}>🚓</div>
            </div>
        )
    }
}

const mSTP = state => ({
    loggedIn: state.session.isAuthenticated
});

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Under21);