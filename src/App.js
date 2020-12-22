// Core
import React, { Component } from 'react';

import BowlingPins from './components/BowlingPins';

const styles = {
  width: '100%',
  display: 'flex',
  height: '5vh',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '32px',
  fontFamily: 'Fira Code',
};

class App extends Component {
  render() {
    return (
      <div>
        <div style={styles}>BowlingScoreChallenge</div>
        <BowlingPins />
      </div>
    );
  }
}

export default App;
