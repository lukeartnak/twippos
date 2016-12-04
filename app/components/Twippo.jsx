import React from 'react';

export default class Application extends React.Component {

  render() {
    return (
      <div className="list-group-item">
        <span className="tag tag-default tag-default float-xs-right">{this.props.typos}</span>
        <h4 className="list-group-item-heading">{this.props.user.screen_name}</h4>
        <p className="list-group-item-text">{this.props.text}</p>
      </div>
    )
  }


}
