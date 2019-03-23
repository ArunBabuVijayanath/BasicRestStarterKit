import React, { Component } from "react";

class Media extends Component {
  onError = e => {
    let placeHolderImg = `${
      process.env.PUBLIC_URL
    }/images/placeholder_for_missing_posters.png`;
    e.target.src = placeHolderImg;
  };

  render() {
    let imageUrl = `${process.env.PUBLIC_URL}/images/${
      this.props.mediaDetails["poster-image"]
    }`;

    return (
      <div className="col col-4 text-center media-item">
        <img
          className="img-fluid media-image"
          src={imageUrl}
          onError={this.onError}
        />
        <p className="media-details-text">{this.props.mediaDetails.name}</p>
      </div>
    );
  }
}

export default Media;
