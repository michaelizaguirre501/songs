import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  console.log("~~DETAIL~~", song);
  return (
    <div className="">
      <div className="">Title: {song?.title}</div>
      <div className="">Duration: {song?.duration}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
