import "./Left-I.css";
import useSound from 'use-sound';

import F_F2 from './assets/C/1 IV/F/F_F2.mp3';
import FM7_F2 from './assets/C/1 IV/F M7/FM7_F2.mp3';
import Fadd9_F2 from './assets/C/1 IV/F add9/Fadd9_F2.mp3';
import C7_E2 from './assets/C/1 IV/C 7/C7_E2.mp3';
import Caug_E2 from './assets/C/1 IV/C aug/Caug_E2.mp3';
import Edim_E2 from './assets/C/1 IV/bF dim/Edim_E2.mp3';
import bA_bA2 from './assets/C/1 IV/bA/bA_bA2.mp3';


var Kye = "C";

var x = "7";


export function IV1() {
  switch (Kye) {
    case "C": 
      switch (x) {
        case "Norm": var y = "F2"; var [play] = useSound(F_F2, {volume:1}); break;
        case "7th": var y = "F2"; var [play] = useSound(FM7_F2, {volume:1}); break;
        case "sus4": var y = "/"; break;
        case "7sus4": var y = "/"; break;
        case "add9": var y = "F2"; var [play] = useSound(Fadd9_F2, {volume:1}); break;
        case "7": var y = "E2"; var [play] = useSound(C7_E2, {volume:1}); break;
        case "aug": var y = "E2"; var [play] = useSound(Caug_E2, {volume:1}); break;   
        case "dim": var y = "E2"; var [play] = useSound(Edim_E2, {volume:1}); break;
        case "Par.m": var y = "bA2"; var [play] = useSound(bA_bA2, {volume:1}); break;                
        default: var y = "/"; break;
      } break;



    default: var y = "/";
        break;
  }

  if (y != "/") {
    return (
      <button 
        className="IV1" 
        type="button" 
        onMouseUp={() => play()}>
      {y}</button>
    );
  } else {}
}