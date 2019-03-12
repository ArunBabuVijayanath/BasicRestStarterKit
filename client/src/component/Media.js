import React, { Component } from "react";

class Media extends Component {
  render() {
    return (
      <div className="col col-4 text-center media-item">
        <img
          className="img-fluid media-image"
          src={
            process.env.PUBLIC_URL +
            "/images/" +
            this.props.mediaDetails["poster-image"]
          }
        />
        <p className="media-details-text">{this.props.mediaDetails.name}</p>
      </div>
    );
  }
}

export default Media;
