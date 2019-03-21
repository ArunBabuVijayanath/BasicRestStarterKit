import React, { Component } from "react";
import SearchInput from "./Search/SearchInput";
import SearchButton from "./Search/SearchButton";

class Search extends Component {
  render() {
    let isSearching = this.props.isSearching;
    let searchItem = isSearching ? (
      <SearchInput
        setSearchState={this.props.setSearchState}
        searchMedia={this.props.searchMedia}
      />
    ) : (
      <SearchButton setSearchState={this.props.setSearchState} />
    );
    return <div>{searchItem}</div>;
  }
}

export default Search;
