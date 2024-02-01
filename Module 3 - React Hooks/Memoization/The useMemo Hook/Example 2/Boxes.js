import React from 'react';

function Boxes({ boxes }) {
  console.log('Render Boxes');
  
  return (
    <div className="boxes-wrapper">
      {boxes.map((boxStyles, index) => (
        <div
          key={index}
          className="box"
          style={boxStyles}
        />
      ))}
    </div>
  );
}

export default Boxes;