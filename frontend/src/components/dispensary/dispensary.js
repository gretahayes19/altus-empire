import React from 'react';
import ReviewIndex from './review_index'
import ReviewFormContainer from './review_form_container'


import '../../styles/dispensary.css';

class Dispensary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      dispensary: null
    }
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.dispensaryId).then(
      this.props.fetchDispensaries().then(
        () => this.setState({reviews: this.props.reviews, dispensary: this.props.dispensary})
      )
    );
    
  }

  componentDidUpdate(prevProps) {
    console.log(this.state)
    if (prevProps.reviews !== this.state.reviews) {
      this.props.fetchReviews(this.props.match.params.dispensaryId).then(
        () => this.setState({ reviews: this.props.reviews})
      )
    }

  }

  render() {
    // if (!this.state.reviews.length) return null;
    if (!this.state.dispensary) return null;
    const {reviews, dispensary } = this.state 
    const sortedReviews = reviews.slice().reverse()

      return (
        <div className="dispensary-page-div">
              <h1>{dispensary.dispensaryName}</h1>
              <p className="disp-desciption">{dispensary.description}</p>
              <ReviewFormContainer dispensary={dispensary} />
             <ReviewIndex reviews={sortedReviews} />
          </div>
      )
  }

}

export default Dispensary;