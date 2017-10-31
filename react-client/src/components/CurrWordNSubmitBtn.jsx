import React from 'react';

const CurrWordNSubmitBtn = ({ selectedChars, selectedRowCol, handleSubmit }) => {
  console.log('sc in currWord', selectedChars);
  let currWord = selectedChars.slice().join('');
  return (
    <div className="wordAndSubmitBtn">
      <div className="word">
        <p>Current Word: {currWord}</p>
      </div>

      <div className="submitBtn">
        <input onClick={handleSubmit} type="submit" value="Submit Word" />
      </div>
    </div>
  );
};

export default CurrWordNSubmitBtn;
