import { connect } from 'react-redux';
import Dispensary from './dispensary';

const mSTP = state => ({
    loggedIn: state.session.isAuthenticated
});

// const mDTP = dispatch => ({

// })

export default connect(mSTP)(Dispensary);