// CORE
import React, { useState } from 'react';

function BowlingPins() {
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '1em',
    fontFamily: 'Fira Code',
    maxWidth: '100%',
  };
  // DEFAULT PINS
  const defaultPinAmount = 10;
  // TOTALT PINS VARJE RUNDA
  const [pinsEachRound, setPinsEachRound] = useState(defaultPinAmount);
  // PINS KNOCKDOWN VARJE RUNDA
  const pinsKnockedDown = 3;
  // PINS KVAR VARJE RUNDA
  const pinsLeft = defaultPinAmount - pinsKnockedDown;
  // LOG
  console.log(pinsEachRound, pinsKnockedDown, pinsLeft);

  return (
    <React.Fragment>
      <div style={styles}>
        <button
          value={defaultPinAmount - pinsKnockedDown}
          onClick={(e) => setPinsEachRound(e.target.value)}
        >
          1
        </button>
      </div>
    </React.Fragment>
  );
}
export default BowlingPins;
