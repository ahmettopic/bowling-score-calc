// Core
import React, { Component } from 'react';
import BowlingPins from './components/BowlingPins';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '22px',
  fontFamily: 'Fira Code',
  minWidth: '100%',
};

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div style={styles}>BowlingScoreChallenge</div>
          <BowlingPins />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
