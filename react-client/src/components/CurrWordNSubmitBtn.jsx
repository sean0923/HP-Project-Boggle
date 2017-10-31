import React from 'react';

const CurrWordNSubmitBtn = ({ selectedChars, handleSubmit }) => {
  let reversedChars = selectedChars.slice().reverse().join('');
  return (
    <div className="wordAndSubmitBtn">
      <div className="word">
        <p>Current Word: {reversedChars}</p>
      </div>

      <div className="submitBtn">
        <input onClick={handleSubmit} type="submit" value="Submit Word" />
      </div>
    </div>
  );
};

export default CurrWordNSubmitBtn;
