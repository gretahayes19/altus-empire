import React from 'react';

const DispensaryEntry = props => {
    const {dispensary} = props;

    return (
      <div className="dispensary-entry-container">
        <div className="company-logo"></div>
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
    );
}

export default DispensaryEntry;