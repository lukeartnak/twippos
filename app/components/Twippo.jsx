import React from 'react';

export default class Application extends React.Component {

  render() {
    return (
      <div className="list-group-item">
        <span className="tag tag-default tag-default float-xs-right">{this.props.typos.length}</span>
        <h4 className="list-group-item-heading">{this.props.tweet.author}</h4>
        <p className="list-group-item-text">{this.props.tweet.tweet}</p>
      </div>
    )
  }


}
