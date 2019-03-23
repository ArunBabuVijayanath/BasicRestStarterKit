import React, { Component } from "react";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    };
  }
  setSearchState = () => {
    this.props.setSearchState(false);
  };

  searchMedia = () => {
    this.props.searchMedia(this.state.searchQuery);
  };

  updateSearchQuery = e => {
    this.setState({
      searchQuery: e.target.value
    });
  };
  render() {
    return (
      <div className="col search-box">
        <a className="back-btn" onClick={this.setSearchState}>
          <img
            className="search-img"
            src={process.env.PUBLIC_URL + "/images/Back.png"}
          />
        </a>
        <input
          type="text"
          placeholder="Search"
          onChange={this.updateSearchQuery}
          value={this.state.searchQuery}
          className="form-control search-input"
        />

        <a className="search-data-btn" onClick={this.searchMedia}>
          <img
            className="search-img"
            src={process.env.PUBLIC_URL + "/images/search.png"}
          />
        </a>
      </div>
    );
  }
}

export default SearchInput;
