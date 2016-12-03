import React from 'react';

export default class TwippoMeter extends React.Component {

  render() {
    return (
      <div className="twippo-meter">
      <div className="thermometer">
        <div className="neck"></div>
        <div className="neck-fill"></div>
        <div className="bulb"></div>
        <div className="bulb-fill"></div>
      </div>
      </div>
    )
  }


}
