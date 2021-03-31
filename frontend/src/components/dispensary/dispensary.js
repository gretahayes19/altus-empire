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

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    // if (!this.state.reviews.length) return null;
    if (!this.state.dispensary) return null;
    debugger;
    const {reviews, dispensary } = this.state 
      return (
        <div className="dispensary-page-div">
              <h1>{dispensary.dispensaryName}</h1>
              <ReviewFormContainer dispensary={dispensary} />
             <ReviewIndex reviews={reviews} />
          </div>
      )
  }

}

export default Dispensary;