import React, { Component } from 'react';
import Pin from './Pin';
class BowlingPins extends Component {
  state = {
    defaultPinAmount: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    counter: 1, // update counter each turn
    selectedPinAmount: 0,
    updateTotalScore: '0',
    currentThrow: 1, // set Throws
    currentRound: 1,
    totalRounds: 10,
    spare: false, // Check if player got spare
    strike: 0, // Check if player got Strike
    showPins: true,
  };

  gameHandler = () => {
    if (this.state.counter === 2) {
      return this.setState(
        {
          showPins: false,
          counter: this.state.counter - 1,
          currentRound: this.state.currentRound + 1,
          totalRounds: this.state.totalRounds - 1,
        },
        console.log('Round Finished')
      );
    } else {
      return this.setState({
        counter: this.state.counter + 1,
        currentThrow: this.state.currentThrow + 1,
      });
    }
  };

  selectedPinValue = (i) => {
    this.setState(
      (state) => {
        let defaultPinAmount = state.defaultPinAmount.slice((1, i + 1));
        let selectedPinAmount = i + 1;
        if (selectedPinAmount === 10) {
          state.strike = 1;
          state.showPins = false;
          console.log('STRIKE!');
        }
        return {
          defaultPinAmount,
          selectedPinAmount,
        };
      },

      this.setState((prevState) => ({
        updateTotalScore: prevState.selectedPinAmount + (i + 1),
      }))
    );

    console.log('PINS STRIKED: ' + (i + 1));
    this.gameHandler();
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
                key={item}
                onClick={() =>
                  this.selectedPinValue(index) & (this.state.counter + 1)
                }
              >
                {this.state.showPins ? <Pin /> : null}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            backgroundColor: '#ff4242',
            display: 'flex',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={this.gameHandler}
        >
          MISS
        </div>

        <div>
          <p>Current Round: {this.state.currentRound}</p>
          <p>Rounds Left: {this.state.totalRounds}</p>

          <p>Amount of Strikes: {this.state.strike}</p>
          <p>Current score: {this.state.updateTotalScore}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default BowlingPins;
