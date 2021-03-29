import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import SignupForm from './signup_form';

const mSTP = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
    formType: 'signup'
  };
};

const mDTP = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
  };
}

export default connect(mSTP, mDTP)(SignupForm);