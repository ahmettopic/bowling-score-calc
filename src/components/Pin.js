import React, { Component } from 'react';
import { GiBowlingPin } from 'react-icons/gi';

function MouseOver(event) {
  event.target.style.color = '#ff3b5b';
}
function MouseOut(event) {
  event.target.style.color = '';
}

class Pin extends Component {
  render() {
    return (
      <GiBowlingPin
        size={50}
        color={'#e8e8e8'}
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
      />
    );
  }
}

export default Pin;
