import React from 'react';
import ReviewIndex from './review_index'

class Dispensary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      dispensary: {}
    }
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.dispensaryId).then(
      this.props.fetchDispensaries().then(
        () => this.setState({reviews: this.props.reviews, dispensary: this.props.dispensary})
      )
    );
    
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    // if (!this.state.reviews.length) return null;
    if (!this.props.dispensary) return null;

    const {reviews, dispensary } = this.state 
      return (
          <div>
              <h1>{dispensary.dispensaryName}</h1>
              <h1>Hello</h1>
             <ReviewIndex reviews={reviews} />
          </div>
      )
  }

}

export default Dispensary;