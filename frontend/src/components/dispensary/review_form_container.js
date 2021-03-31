import React from "react";
import { connect } from "react-redux";
import ReviewForm from './review_form';
import { createReview } from '../../actions/rating_actions'

const mSTP = (state, ownProps) => {
    return {
        initialState: {
            rating: 5,
            review: "",
            dispensaryId: ownProps.dispensary._id
        }
    }
}

const mDTP = (dispatch) => ({
    createReview: review => dispatch(createReview(review)),
})

export default connect(mSTP, mDTP)(ReviewForm)