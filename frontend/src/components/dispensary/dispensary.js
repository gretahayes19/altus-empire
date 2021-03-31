import React from 'react';
import ReviewIndex from './review_index'

class Dispensary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.fetchReviews(this.props.match.params.dispensaryId);
    this.props.fetchDispensaries();
  }

  render() {
    if (!this.props.reviews) return null;
    if (!this.props.dispensary) return null;

    const {reviews, dispensary } = this.props 
      return (
          <div>
              <h1>{dispensary.dispensaryName}</h1>
             <ReviewIndex reviews={reviews} />
          </div>
      )
  }

}

export default Dispensary;