import React from 'react';

import TwippoChart from '../components/TwippoChart';
import TwippoFeed from './TwippoFeed';
import TwippoMeter from '../components/TwippoMeter';

export default class Application extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8">
            <TwippoFeed />
          </div>
          <div className="col-xs-4">
            <TwippoMeter />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <TwippoChart />
          </div>
        </div>
      </div>
    )
  }


}
