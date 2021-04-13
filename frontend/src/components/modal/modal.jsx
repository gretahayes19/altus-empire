import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import Under21Container from '../main/under21_container';
// import DeleteReviewContainer from '../dispensary/delete_review_container';

import '../../styles/modal.css'
import '../../styles/under21_main.css'

function Modal({modal, closeModal}) {
    if (!modal) return null;
    let component;
    switch (modal) {
        case "login":
            component = <LoginFormContainer />;
            break;
        case "signup":
            component = <SignupFormContainer />;
            break;
        case "under21":
            component = <Under21Container />;
            break;
        // case "delete":
        //     component = <DeleteReviewContainer />;
        //     break;
        default:
            return null;
    }

    // if (modal === "under21") {
    //     <div className="modal-background-div" onClick={closeModal}>
    //             <div className="modal-form-div" onClick={e => e.stopPropagation()}>
    //                 {component}
    //             </div>
    //     </div>
    // } else {
        return (
            <div className={`modal-background-div ${modal}`} onClick={closeModal}>
                <div className={`modal-form-div ${modal}`} onClick={e => e.stopPropagation()}>
                    {component}
                </div>
                {/* <div id="modal-background-animate"></div>
                <div id="modal-midground-animate"></div>
                <div id="modal-foreground-animate"></div> */}
            </div>
        )
    // }
}

const mSTP = state => ({
    modal: state.ui.modal
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Modal);