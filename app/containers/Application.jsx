import React from 'react';

import Analytics from './Analytics';
import TwippoFeed from './TwippoFeed';
import TwippoMeter from '../components/TwippoMeter';

export default class Application extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-xs-3">
          <Analytics />
        </div>
        <div className="col-xs-6">
          <TwippoFeed />
        </div>
        <div className="col-xs-3">
          <TwippoMeter />
        </div>
      </div>
    )
  }


}
