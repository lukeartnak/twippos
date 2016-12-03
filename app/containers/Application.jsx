import React from 'react';

import TwippoChart from '../components/TwippoChart';
import TwippoFeed from './TwippoFeed';
import TwippoMeter from '../components/TwippoMeter';

export default class Application extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-3">
            <TwippoChart />
          </div>
          <div className="col-xs-6">
            <TwippoFeed />
          </div>
          <div className="col-xs-3">
            <TwippoMeter />
          </div>
        </div>
      </div>
    )
  }


}
