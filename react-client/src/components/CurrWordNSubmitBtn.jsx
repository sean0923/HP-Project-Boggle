import React from 'react';

const CurrWordNSubmitBtn = (props) => {
  return (
    <div className="wordAndSubmitBtn">
      <div className="word">
        <p>Current Word: {'yeah'}</p>
      </div>

      <div className="submitBtn">
        <input type="submit" value="Submit Word" />
      </div>
    </div>
  );
};

export default CurrWordNSubmitBtn;
