import React from 'react';

const ScrollCTA = ({ text, target }) => {
  return (
    <div className="scroll-cta">
      <a href={target}>
        <span></span>
        {text}
      </a>
    </div>
  );
};

export default ScrollCTA;
