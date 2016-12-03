import React from 'react';

import TwippoChart from '../components/TwippoChart';
import TwippoFeed from './TwippoFeed';
import TwippoMeter from '../components/TwippoMeter';

import io from 'socket.io-client';

export default class Application extends React.Component {

  componentDidMount() {
    this.socket = io('localhost:8080');
    this.socket.on('tweet', (tweet) => {
      console.log(tweet);
    });
  }

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
