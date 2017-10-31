import React from 'react';

const ScoreTable = ({ submittedWords }) => {
  // * 1-2 letters: 0 points
  // * 3-4 letters: 1 point
  // * 5 letters: 2 points
  // * 6 letters: 3 points
  // * 7 letters: 5 points
  // * 8 or more letters: 11 points
  let wordLenToScore = (len) => {
    if (len === 1 || len === 2) return 0;
    else if (len === 3 || len === 4) return 1;
    else if (len === 5) return 2;
    else if (len === 6) return 3;
    else if (len === 7) return 5;
    else if (len >= 8) return 11;
    return 'something worng';
  };

  let total = 0;
  submittedWords.forEach((word) => {
    total += wordLenToScore(word.length);
  });


  return (
    <div className="scoreTable">
      <table>
        <tbody>
          <tr>
            <th>Word</th>
            <th>Score</th>
          </tr>

          {submittedWords.map((word, idx) => {
            return (
              <tr key={idx} >
                <td>{word}</td>
                <td>{wordLenToScore(word.length)}</td>
              </tr>
            );
          })}

          <tr>
            <th>Total</th>
            <th>{total}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScoreTable;
