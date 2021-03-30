import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { login } from '../../util/session_api_util';
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
    login: user => dispatch(login(user)),
  };
}

export default connect(mSTP, mDTP)(SignupForm);