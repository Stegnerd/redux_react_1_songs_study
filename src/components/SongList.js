import React from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // this.props === {songs: state.songs}
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// so now songlist will use songs component
const mapStateToProps = state => {
  return { songs: state.songs };
};

// connecting the component to the provider
// also wiring up the action creator to the component
export default connect(
  mapStateToProps,
  {
    selectSong: selectSong
  }
)(SongList);
