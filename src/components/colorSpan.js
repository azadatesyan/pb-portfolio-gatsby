import React from 'react';

import Fade from 'react-reveal/Fade';

const ColorSpan = ({ text, inverted, highlightColor }) => {
  return (
    <span
      className={`color-span ${inverted ? 'inverted' : ''} ${highlightColor}`}>
      {text}
    </span>
  );
};

export default ColorSpan;
