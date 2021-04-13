import { connect } from "react-redux";
import ReviewForm from './review_form';
import { createReview } from '../../actions/rating_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return {
        initialState: {
            rating: 5,
            review: "",
            dispensaryId: ownProps.dispensary._id,
            errors: state.errors.input
        }
    }
}

const mDTP = (dispatch) => ({
    createReview: review => dispatch(createReview(review)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(ReviewForm)