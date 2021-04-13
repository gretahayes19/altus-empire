import { connect } from 'react-redux';
import Dispensary from './dispensary';
import {fetchReviews, deleteReview} from '../../actions/rating_actions'
import { fetchDispensaries } from '../../actions/dispensary_actions';

const formatArrToObj = arr => {
    let obj = {};
    arr.forEach(ele => obj[ele._id] = ele)
    return obj;
}

const mSTP = (state, ownProps) => {
    return {
        loggedIn: state.session.isAuthenticated,
        dispensary: formatArrToObj(state.entities.dispensaries)[ownProps.match.params.dispensaryId],
        dispensaryId: ownProps.match.params.dispensaryId,
        reviews: state.entities.reviews,   
        user: state.session.user.id
    }
};

const mDTP = dispatch => ({
    fetchReviews: dispendaryId => dispatch(fetchReviews(dispendaryId)),
    fetchDispensaries: () => dispatch(fetchDispensaries()),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
})

export default connect(mSTP, mDTP)(Dispensary);