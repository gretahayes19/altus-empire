import React from 'react';
import '../../styles/dispensary_list.css';
import {Link} from 'react-router-dom';

class DispensaryEntry extends React.Component {

  componentDidMount() {
    // this.fetchPhoto(this.props.dispensary._id)
  }

  render() {
    const { dispensary } = this.props;
    return (
      <Link to={`/dispensary/${dispensary._id}`}>
        <div className="dispensary-entry-container">
          <div className="company-logo">
            {!dispensary.postphoto? (
              <img
                className="dispensary-postphoto"
                // src={`https://altus-empire-seeds.s3.amazonaws.com/emptypostimage.png`}
                alt=""
              />
            ) : (
              <img
                className="dispensary-postphoto"
                src={`https://altus-empire-seeds.s3.amazonaws.com/${dispensary.postphoto}`}
                alt=""
              />
            )}
          </div>
          <div className="dispensary-name">
            <h3>{dispensary.dispensaryName}</h3>
          </div>
          <div className="dispensary-avg-rating"></div>
          <div className="dispensary-contact">
            <div className="dispensary-number">
              <span>{dispensary.phone}</span>
            </div>
            <div className="dispensary-address">
              <span>{dispensary.address.split(",")[0]}</span>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default DispensaryEntry;