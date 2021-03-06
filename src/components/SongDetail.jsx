import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a Song</div>;
  }

  return (
    <div>
      <h3>Song Details for:</h3>
      <p> Title: {song.title} </p>
      <p> Duration: {song.duration} </p>
    </div>
  );
};

const MapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(MapStateToProps)(SongDetail);
