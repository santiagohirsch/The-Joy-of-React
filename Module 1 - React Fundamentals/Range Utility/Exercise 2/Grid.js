import { range } from './utils';

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(0, numRows).map((row) => (
        <div className="row" key={row}>
          {range(0, numCols).map((col) => (
            <div className="cell" key={col} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;