import React, { Component } from "react";

class SearchButton extends Component {
  setSearchState = () => {
    this.props.setSearchState(true);
  };
  render() {
    return (
      <div className="col search-box">
        <a className="search-btn" href="#" onClick={this.setSearchState}>
          <img
            className="search-img"
            src={process.env.PUBLIC_URL + "/images/search.png"}
          />
        </a>
      </div>
    );
  }
}

export default SearchButton;
