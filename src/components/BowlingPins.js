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
      return console.log('No more kast!');
    } else {
      this.setState({ counter: this.state.counter + -1 });
    }
  };

  selectedPinValue = (i) => {
    this.setState((state) => {
      const defaultPinAmount = state.defaultPinAmount.slice((0, i));
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
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: '1em',
      textAlign: 'center',
      fontFamily: 'Fira Code',
      maxWidth: '100%',
    };

    return (
      <React.Fragment>
        <div style={styles}>
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
        <div style={styles}>
          <div
            style={{
              width: '30%',
              backgroundColor: '#2b2b2b',
              color: 'white',
              padding: '30px',
              fontSize: '32px',
            }}
            onClick={this.setCounter}
          >
            {this.state.nextRoundText}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BowlingPins;
