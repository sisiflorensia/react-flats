import React, { Component } from 'react';

import flats from '../data/flats';
import FlatList from './flat_list';
// import SimpleMap from './simple_map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
      selectedFlat: flats[0]
    };
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={this.state.flats} selectedFlat={this.state.selectedFlat} selectFlat={this.selectFlat}/>
        </div>
        <div className="map-container">
         SimpleMap here
        </div>
      </div>
    );
  }
}

export default App;
