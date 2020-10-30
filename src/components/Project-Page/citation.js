import React from 'react';

const Citation = ({ citation }) => {
  return (
    <div>
      <p>
        <em>"{citation.citation}"</em>
      </p>
      <p>
        <strong>{citation.auteur}</strong>
      </p>
    </div>
  );
};

export default Citation;
