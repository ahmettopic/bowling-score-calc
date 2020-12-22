import React, { Component } from 'react';
import Pin from './Pin';
class BowlingPins extends Component {
  state = {
    defaultPinAmount: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    counter: 2,
    showPins: true,
    nextRoundText: 'MISS',
  };

  setCounter = () => {
    console.log('counter: ' + this.state.counter);
    if (this.state.counter <= 1) {
      this.setState({ showPins: false });
      this.setState({ nextRoundText: 'NEXT ROUND!' });
      // RETURN COMPONENT HERE
      return console.log('No more kast!');
    } else {
      this.setState({ counter: this.state.counter + -1 });
    }
  };

  selectedPinValue = (i) => {
    this.setState((state) => {
      const defaultPinAmount = state.defaultPinAmount.slice((0, i + 1));
      return {
        defaultPinAmount,
      };
    });

    this.setCounter();
  };

  render() {
    // Styles
    const styles = {
      display: 'flex',
      justifyContent: 'center',
      height: '20vh',
      width: '100%',
      textAlign: 'center',
      backgroundColor: '#2b2b2b',
    };

    return (
      <React.Fragment>
        <div style={styles}>
          <div
            style={{
              display: 'flex',
              margin: 'auto',
              justifyContent: 'center',
              width: '50%',
              color: 'white',
            }}
            onClick={this.setCounter}
          >
            {this.state.defaultPinAmount.map((item, index) => (
              <div
                key={item}
                type="button"
                onClick={() => this.selectedPinValue(index)}
              >
                {this.state.showPins ? <Pin /> : null}
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BowlingPins;
