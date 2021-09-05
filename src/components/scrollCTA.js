import React from 'react';

const ScrollCTA = ({ text, target }) => {
  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <div className="scroll-cta">
      <a onClick={(e) => handleClick(e)}>
        <span></span>
        {text}
      </a>
    </div>
  );
};

export default ScrollCTA;
