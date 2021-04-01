import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import "../../styles/under21_main.css";

class Under21 extends React.Component {

    render() {
        return (
            <div className="under-21-div">
                <p className="under-21-notice">Sorry! You are not of age to sign up.</p>
                <p className="under-21-info-lr">
                    If you or someone you may know is experiencing pain,
                    Cannabidiol(CBD) oil may be a possible alternative.
                </p>
                <p className="under-21-info-rl">
                    <ul className="under-21-ul">CBD oil has been known to help treat:
                        <li className="under-21-li">Anxiety</li>
                        <li className="under-21-li">Epilepsy</li>
                        <li className="under-21-li">Chronic Pain</li>
                    </ul>
                </p>
                <p className="under-21-links">
                    <a href="https://www.google.com/search?q=legalization+of+cannabis&oq=legalization+of+cannabis&aqs=chrome..69i57.4613j1j4&sourceid=chrome&ie=UTF-8">
                        Please read more about the legalization of cannabis here
                    </a>
                </p>
                <p className="under-21-links">
                    <a href="https://www1.nyc.gov/site/nypd/services/victim-services/how-to-report-a-crime.page">
                        See something say something  <span style={{fontSize: '48px'}}>🚓</span>
                    </a>
                </p>
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