import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(NavBar);