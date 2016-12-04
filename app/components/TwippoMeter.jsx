import React from 'react';

export default class TwippoMeter extends React.Component {

  render() {
    let size = this.props.tps/15*89;
    return (
      <div className="twippo-meter">
        <h2>Twippo Meter</h2>
        <h3>{(Math.round(this.props.tps*10)/10).toFixed(1)} TPS</h3>
        <div className="thermometer">
          <div className="neck"></div>
          <div className="neck-fill" style={{height: size+'%'}}></div>
          <div className="bulb"></div>
          <div className="bulb-fill"></div>
        </div>
      </div>
    )
  }


}
