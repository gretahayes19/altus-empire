import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '..'

import NavBar from './navbar';

const mSTP = state => ({
  loggedIn: state.session.isAuthenticated
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(NavBar);