import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)} // passes song to select song from actions
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    console.log("~~PROPS~~", this.props);

    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs, selectedSong: state.selectedSong };
};

export default connect(mapStateToProps, { selectSong })(SongList);
