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

  const [defaultPinValue, setDefaultPinValue] = useState([10]);
  const [selectedPinValue, setSelectedPinValue] = useState([3]);

  return (
    <React.Fragment>
      <div style={styles}>
        <button
          value={defaultPinValue - selectedPinValue}
          onClick={(e) => setDefaultPinValue(e.target.value)}
        >
          1
        </button>
      </div>
    </React.Fragment>
  );
}
export default BowlingPins;
