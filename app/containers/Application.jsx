import React from 'react';

import TwippoChart from '../components/TwippoChart';
import TwippoFeed from './TwippoFeed';
import TwippoMeter from '../components/TwippoMeter';

import io from 'socket.io-client';

export default class Application extends React.Component {

  constructor() {
    super();
    this.state = {tweets: []};
  }

  componentDidMount() {
    this.socket = io('127.0.0.1:8080');
    this.socket.on('tweets', (tweets) => {
      this.setState({tweets: this.state.tweets.concat(tweets)});
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8">
            <TwippoFeed tweets={this.state.tweets.sort((a, b) => b.typos-a.typos).slice(0, 6)} />
          </div>
          <div className="col-xs-4">
            <TwippoMeter />
          </div>
        </div>
      </div>
    )
  }


}
