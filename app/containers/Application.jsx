import React from 'react';

import TwippoChart from '../components/TwippoChart';
import TwippoFeed from './TwippoFeed';
import TwippoMeter from '../components/TwippoMeter';

import io from 'socket.io-client';

export default class Application extends React.Component {

  constructor() {
    this.state = {tweets: []};
  }

  componentDidMount() {
    this.socket = io('localhost:8080');
    this.socket.on('tweet', (tweet) => {
      this.setState({tweets: [...this.state.tweets, tweet]});
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8">
            <TwippoFeed tweets={this.state.tweets} />
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
