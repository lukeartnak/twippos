import React from 'react';

import Twippo from '../components/Twippo';

export default class TwippoFeed extends React.Component {

  render() {
    return (
      <div className="twippo-feed">
        <h2>Biggest Twippos</h2>
        <ul className="media-list">
          {this.props.tweets.map(tweet => <Twippo id={tweet.id} {...tweet} />)}
        </ul>
      </div>
    )
  }

}
