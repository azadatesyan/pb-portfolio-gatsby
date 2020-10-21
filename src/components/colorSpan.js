import React from 'react';

const ColorSpan = ({ text, inverted, highlightColor }) => {
  return (
    <span
      className={`color-span ${inverted ? 'inverted' : ''} ${highlightColor}`}>
      {text}
    </span>
  );
};

export default ColorSpan;
