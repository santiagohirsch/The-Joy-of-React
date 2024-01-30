import React from 'react';

import { range } from './utils';

function Graph({ from, to }) {
  return (
    <div className="graph">
      {range(from, to + 1, 10).map((peg) => 
        <div className="peg" key={peg}>{peg}</div>      
      )}
    </div>
  );
}

export default Graph;