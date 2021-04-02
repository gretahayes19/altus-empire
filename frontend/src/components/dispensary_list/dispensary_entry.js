import React from 'react';
import '../../styles/dispensary_list.css';
import {Link} from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

class DispensaryEntry extends React.Component {

  componentDidMount() {
    // this.fetchPhoto(this.props.dispensary._id)
  }

  render() {
    const { dispensary } = this.props;
    const starOps = {
      size: 30,
      isHalf: false,
      edit: false,
      color: "#94D7C5",
      activeColor: "#F6CB24",
      emptyIcon: <i className="fas fa-cannabis"></i>,
      filledIcon: < i className="fas fa-cannabis" ></i>
    };

    return (
      <Link to={`/dispensary/${dispensary._id}`}>
        <div className="dispensary-entry-container">
          <div className="dispensary-general-info">
            <div className="company-logo">
              {!dispensary.postphoto ? (
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
            <div className="dispensary-avg-rating">
              <ReactStars value={Math.round(dispensary.avgRating.$numberDecimal)} {...starOps} />
              <span>{parseFloat(dispensary.avgRating.$numberDecimal).toFixed(1)}</span>
            </div>
          </div>

          <div className="dispensary-contact">
              <div className="dispensary-number">
                <span>{formatPhoneNumber(dispensary.phone)}</span>
              </div>
              <div className="dispensary-address">
                <span>{dispensary.address.split(",")[0]}</span>
              </div>
              <div className="dispensary-borough">
                <span>{dispensary.address.split(",")[1]}</span>
              </div>
            </div>
        </div>
      </Link>
    )
  }
}

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
}

export default DispensaryEntry;