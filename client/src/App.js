import React, { Component } from "react";
import Media from "./component/Media";
import { connect } from "react-redux";
import { getMediaContents } from "./actions/mediaActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class App extends Component {
  state = {
    page: this.props.media["page-num-requested"]
  };
  constructor(props) {
    super(props);
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
    if (lastMediaItem && lastMediaItem.offsetTop) {
      const lastMediaItemOffset =
        lastMediaItem.offsetTop + lastMediaItem.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;
      var bottomOffset = 2;
      if (
        pageOffset > lastMediaItemOffset - bottomOffset &&
        this.state.page <= this.props.media.maxPageNumber
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

  render() {
    const mediaItems = this.props.media["content-items"].content;
    const mediaContents = mediaItems.map((mediaDetails, index) => (
      <Media key={index} mediaDetails={mediaDetails} />
    ));

    return (
      <div className="container-fluid">
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
