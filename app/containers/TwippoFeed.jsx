import React from 'react';

import Twippo from '../components/Twippo';

export default class TwippoFeed extends React.Component {

  render() {
    return (
      <div className="twippo-feed">
        <h2>Latest Twippos</h2>
        <ul className="media-list">
          <Twippo />
          <Twippo />
          <Twippo />
          <Twippo />
          <Twippo />
          <Twippo />
        </ul>
      </div>
    )
  }

}
