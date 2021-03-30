import React from 'react';

class Dispensary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.dispensaryId)
  }

  render() {
    if (!this.props.review) return null;


      return (
          <div>
              
          </div>
      )
  }

}

export default Dispensary;