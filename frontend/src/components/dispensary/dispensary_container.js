import { connect } from 'react-redux';
import Dispensary from './dispensary';
import {fetchReviews} from '../../actions/rating_actions'

const mSTP = state => ({
    loggedIn: state.session.isAuthenticated,
    
});

const mDTP = dispatch => ({
    fetchReviews: dispendaryId => dispatch(fetchReviews(dispendaryId))
})

export default connect(mSTP)(Dispensary);