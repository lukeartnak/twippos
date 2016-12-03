import React from 'react';

export default class Application extends React.Component {

  render() {
    return (
      <li className="media">
        <a className="media-left" href="#">
          <img className="media-object" src="/profile.png" alt="Generic placeholder image" />
        </a>
        <div className="media-body">
          <h4 className="media-heading">Luke Artnak</h4>
          <p>Everyone's got their Christmas trees up and we usually put ours up a week before Christmas</p>
        </div>
      </li>
    )
  }


}
