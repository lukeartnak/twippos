import React from 'react';

export default class TwippoChart extends React.Component {

  render() {
    return (
      <div className="twippo-chart">
        <table className="table table-bordered">
          <thead className="thead-default">
            <tr>
              <th>Typo</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Definately</td><td>3,002</td></tr>
            <tr><td>Chritsmas</td><td>2,120</td></tr>
            <tr><td>Definately</td><td>3,002</td></tr>
            <tr><td>Chritsmas</td><td>2,120</td></tr>
            <tr><td>Definately</td><td>3,002</td></tr>
            <tr><td>Chritsmas</td><td>2,120</td></tr>
            <tr><td>Definately</td><td>3,002</td></tr>
            <tr><td>Chritsmas</td><td>2,120</td></tr>
            <tr><td>Definately</td><td>3,002</td></tr>
            <tr><td>Chritsmas</td><td>2,120</td></tr>
          </tbody>
        </table>
      </div>
    )
  }


}
