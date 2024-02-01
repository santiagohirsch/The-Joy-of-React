import React from 'react';
import { Play, Pause } from 'react-feather';

import VisuallyHidden from './VisuallyHidden';

function MediaPlayer({ src }) {
  const [playState, setPlayState] = React.useState(false);
  const audioRef = React.useRef();
  return (
    <div className="wrapper">
      <div className="media-player">
        <img
          alt=""
          src="https://sandpack-bundler.vercel.app/img/take-it-easy.png"
        />
        <div className="summary">
          <h2>Take It Easy</h2>
          <p>Bvrnout ft. Mia Vaile</p>
        </div>
        <button
          onClick={() => {
            if (playState) {
              audioRef.current.pause();
            } else {
              audioRef.current.play();
            }
            setPlayState(!playState);
          }}
        >
          {playState ? <Pause /> : <Play />}
          <VisuallyHidden>Toggle playing</VisuallyHidden>
        </button>

        <audio src={src} ref={audioRef} />
      </div>
    </div>
  );
}

export default MediaPlayer;