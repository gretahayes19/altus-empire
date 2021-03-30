import { connect } from 'react-redux';
import Dispensary from './dispensary';
import {fetchReviews} from '../../actions/rating_actions'

const mSTP = (state, ownProps) => ({
    loggedIn: state.session.isAuthenticated,
    dispensaryId: ownProps.dispensaryId,
    reviews: state.entities.reviews,
    
});

const mDTP = dispatch => ({
    fetchReviews: dispendaryId => dispatch(fetchReviews(dispendaryId))
})

export default connect(mSTP)(Dispensary);