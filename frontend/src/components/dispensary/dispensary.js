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
    if (prevProps.reviews.length !== this.props.reviews.length) {
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
              <div className="dispensary-left">
                  <h1 className="dispensary-title">{dispensary.dispensaryName}</h1>
                 <p className="disp-address">{dispensary.address}</p>

                  <img
                    className="dispensary-pagepic"
                    src={`https://altus-empire-seeds.s3.amazonaws.com/${dispensary.postphoto}`}
                    alt=""
                  />
                  
                      <p className="disp-desciption">{dispensary.description}</p>
         

              </div>
              <div className="dispensary-right">
                  <ReviewFormContainer dispensary={dispensary} />
                  <ReviewIndex reviews={sortedReviews} />
              </div>

          </div>
      )
  }

}

export default Dispensary;