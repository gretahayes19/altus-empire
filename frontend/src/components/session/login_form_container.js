import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from "../../actions/modal_actions"
import LoginForm from './login_form';

const mSTP = (state) => ({
  errors: state.errors.session,
  formType: 'login'
})

const mDTP = (dispatch) => ({
  login: user => dispatch(login(user)),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal) => dispatch(openModal(modal)),
})

export default connect(mSTP, mDTP)(LoginForm);