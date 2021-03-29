import { connect } from 'react-redux';
import MainPage from './main_page';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => ({
    // state
});

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(MainPage);