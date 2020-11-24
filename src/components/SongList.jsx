import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    return <div>{this.props}</div>;
  }
}

const MaptStateToProps = state => {
  return { songs: state.songs };
};

export default connect(MaptStateToProps)(SongList);
