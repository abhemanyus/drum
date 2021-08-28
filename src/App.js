import { useState } from 'react';

import './App.css';

import A from './sounds/A.mp3';
import C from './sounds/C.mp3';
import D from './sounds/D.mp3';
import E from './sounds/E.mp3';
import Q from './sounds/Q.mp3';
import S from './sounds/S.mp3';
import W from './sounds/W.mp3';
import X from './sounds/X.mp3';
import Z from './sounds/Z.mp3';

const sounds = {'Q': Q, 'W': W, 'E': E, 'A': A, 'S': S, 'D': D, 'Z': Z, 'X': X, 'C': C};

function App() {
  const [struckNote, setstruckNote] = useState('Start!');
  const playDrum = ({key}) => {
    key = key.toUpperCase();
    if (sounds[key]) {
      drumStruck(key);
    }
  };
  const drumStruck = (key) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    setstruckNote(key);
  };
  let notes = [];
  for (let key in sounds) {
    notes.push(
      <button key={key} className="drum-pad" 
      onClick={() => drumStruck(key)} 
      id={'drum'+key}>{key}<audio src={sounds[key]} className="clip" id={key}/></button>
    );
  };
  return (
    <div id="drum-machine" className="App" onKeyDown={playDrum}>
      <h1 id="display">{struckNote}</h1>
      <div id="drum">
        {notes}
      </div>
    </div>
  );
}

export default App;
