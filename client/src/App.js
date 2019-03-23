import React, { Component } from "react";
import Media from "./component/Media";
import Search from "./component/Search";
import { connect } from "react-redux";
import {
  getMediaContents,
  searchMediaContents,
  resetMediaContents
} from "./actions/mediaActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.media["page-num-requested"],
      isSearching: false
    };
  }

  componentDidMount() {
    this.loadMediaData(this.state.page);
    this.scrollListener = window.addEventListener("scroll", e => {
      this.handleScroll(e);
    });
  }

  handleScroll = e => {
    const lastMediaItem = document.querySelector(
      "div.media-list > .media-item:last-child"
    );
    if (lastMediaItem && lastMediaItem.offsetTop && !this.state.isSearching) {
      const lastMediaItemOffset =
        lastMediaItem.offsetTop + lastMediaItem.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;
      var bottomOffset = 2;
      if (
        pageOffset > lastMediaItemOffset - bottomOffset &&
        this.state.page < this.props.media.maxPageNumber
      ) {
        this.loadMore();
      }
    }
  };

  loadMediaData(pageNumber) {
    this.props.getMedia(pageNumber);
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }));

    setTimeout(() => {
      this.loadMediaData(this.state.page);
    });
  };

  setSearchState = searchState => {
    this.setState(
      {
        isSearching: searchState
      },
      () => {
        if (!this.state.isSearching) {
          this.props.resetMediaData();
        }
      }
    );
  };

  searchMedia = queryItem => {
    this.props.searchMediaContents(queryItem);
  };

  render() {
    const mediaItems = this.props.media["content-items"].content;
    let mediaContents = (
      <div className="col text-center">
        <p className="no-img-found">Loading</p>
      </div>
    );
    if (mediaItems.length) {
      mediaContents = mediaItems.map((mediaDetails, index) => (
        <Media key={index} mediaDetails={mediaDetails} />
      ));
    } else if (this.state.isSearching) {
      mediaContents = (
        <div className="col text-center">
          <p className="no-img-found">Nothing Here</p>
        </div>
      );
    }

    return (
      <div className="container-fluid app-container">
        <Search
          isSearching={this.state.isSearching}
          setSearchState={this.setSearchState}
          searchMedia={this.searchMedia}
        />
        <div className="row media-list">{mediaContents}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer,
    media: state.mediaReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMedia: pageNumber => {
      dispatch(getMediaContents(pageNumber));
    },
    searchMediaContents: searchQuery => {
      dispatch(searchMediaContents(searchQuery));
    },
    resetMediaData: () => {
      dispatch(resetMediaContents());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
