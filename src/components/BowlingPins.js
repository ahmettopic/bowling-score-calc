// CORE
import React, { Component } from 'react';

const listStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '1em',
  fontFamily: 'Fira Code',
  maxWidth: '100%',
};

class BowlingPins extends Component {
  state = {
    defaultPinAmount: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    showCurrentScore: [],
  };

  render() {
    return (
      <React.Fragment>
        <div style={listStyle}>
          {this.state.defaultPinAmount.map((pin, i) => (
            <button key={i} id={pin} onClick={() => console.log(pin)}>
              {pin}
            </button>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default BowlingPins;
