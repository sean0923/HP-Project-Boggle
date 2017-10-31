import React from 'react';

const ScoreTable = (props) => {
  return (
    <div className="scoreTable">
      <table>
        <tbody>
          <tr>
            <th>Word</th>
            <th>Score</th>
          </tr>
          <tr>
            <td>some word</td>
            <td>10</td>
          </tr>
          <tr>
            <td>other word</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScoreTable;
