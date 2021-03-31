import { connect } from 'react-redux';
import Dispensary from './dispensary';
import {fetchReviews} from '../../actions/rating_actions'
import { fetchDispensaries } from '../../actions/dispensary_actions';


const mSTP = (state, ownProps) => {
    debugger
    return {
    loggedIn: state.session.isAuthenticated,
    dispensary: state.entities.dispensaries[ownProps.match.params.dispendaryId],
    dispensaryId: ownProps.match.params.dispensaryId,
    reviews: state.entities.reviews,   
    }
};

const mDTP = dispatch => ({
    fetchReviews: dispendaryId => dispatch(fetchReviews(dispendaryId)),
    fetchDispensaries: () => dispatch(fetchDispensaries())

})

export default connect(mSTP, mDTP)(Dispensary);