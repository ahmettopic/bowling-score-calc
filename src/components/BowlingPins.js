import React, { Component } from 'react';
import Pin from './Pin';
class BowlingPins extends Component {
  state = {
    defaultPinAmount: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    counter: 1, // update counter each turn
    currentRound: 1, // something
    totalScore: 0,
    spare: false, // Check if player got spare
    strike: false, // Check if player got Strike
    showPins: true,
  };

  checkCount = () => {
    if (this.state.counter === 2) {
      return this.setState(
        {
          showPins: false,
          counter: this.state.counter - 2,
          currentRound: this.state.currentRound + 1,
        },
        console.log('Round Finished!')
      );

      //RETURN COMPONENT HERE
    } else {
      return this.setState({ counter: this.state.counter + 1 });
    }
  };

  selectedPinValue = (i) => {
    this.setState((state) => {
      const defaultPinAmount = state.defaultPinAmount.slice((1, i + 1));

      return {
        defaultPinAmount,
      };
    });
    console.log('selectedPinAmount: ' + (i + 1));
    this.checkCount();
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
          >
            {this.state.defaultPinAmount.map((item, index) => (
              <div
                onMouseOver={this.selectedPinValueCOUNTER}
                key={item}
                type="button"
                onClick={() =>
                  this.selectedPinValue(index) &
                  (this.state.counter + 1, this.state.totalScore + index)
                }
              >
                {this.state.showPins ? <Pin /> : null}
              </div>
            ))}
          </div>
        </div>
        <button onClick={this.checkCount}>MISS</button>
      </React.Fragment>
    );
  }
}

export default BowlingPins;
