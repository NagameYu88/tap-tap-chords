import "./Left-I.css";
import useSound from 'use-sound';


var Kye = "C";

var x = "C7";


import F_F2 from './assets/C/1 IV/F/F_F2.mp3';
import FM7_F2 from './assets/C/1 IV/F M7/FM7_F2.mp3';
import Fadd9_F2 from './assets/C/1 IV/F add9/Fadd9_F2.mp3';
import C7_E2 from './assets/C/1 IV/C 7/C7_E2.mp3';
import Caug_E2 from './assets/C/1 IV/C aug/Caug_E2.mp3';
import Edim_E2 from './assets/C/1 IV/bF dim/Edim_E2.mp3';

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
        case "Par.m": var y = "/"; break;                
        default: var y = "/"; break;
      } break;


    default: var y = "/"; break;
  }
  if (y != "/") {
    return (
      <button 
        className="IV1"   type="button"   onMouseUp={() => play()}>
      {y}</button>
    );  } else {}
}

import Fadd9_G2 from './assets/C/1 IV/F add9/Fadd9_G2.mp3';
import C7_G2 from './assets/C/1 IV/C 7/C7_G2.mp3';
import Caug_bA2 from './assets/C/1 IV/C aug/Caug_bA2.mp3';
import Edim_G2 from './assets/C/1 IV/bF dim/Edim_G2.mp3';
import bA_bA2 from './assets/C/1 IV/bA/bA_bA2.mp3';

export function IV2() {
  switch (Kye) {
    case "C": 
      switch (x) {
        case "Norm": var y = "/"; break;   
        case "7th": var y = "/"; break;   
        case "sus4": var y = "/"; break;
        case "7sus4": var y = "/"; break;
        case "add9": var y = "G2"; var [play] = useSound(Fadd9_G2, {volume:1}); break;
        case "7": var y = "G2"; var [play] = useSound(C7_G2, {volume:1}); break;
        case "aug": var y = "bA2"; var [play] = useSound(Caug_bA2, {volume:1}); break;   
        case "dim": var y = "G2"; var [play] = useSound(Edim_G2, {volume:1}); break;
        case "Par.m": var y = "bA2"; var [play] = useSound(bA_bA2, {volume:1}); break;               
        default: var y = "/"; break;
      } break;


    default: var y = "/";  break;
  }
  if (y != "/") {
    return (
      <button 
        className="IV2"   type="button"   onMouseUp={() => play()}>
      {y}</button>
    );  } else {}
}

import F_A2 from './assets/C/1 IV/F/F_A2.mp3';
import Fadd9_A2 from './assets/C/1 IV/F add9/Fadd9_A2.mp3';
import C7_bB2 from './assets/C/1 IV/C 7/C7_bB2.mp3';
import Edim_bB2 from './assets/C/1 IV/bF dim/Edim_bB2.mp3';

export function IV3() {
  switch (Kye) {
    case "C": 
      switch (x) {
        case "Norm": var y = "A2"; [play] = useSound(F_A2, {volume:1}); break;  
        case "7th": var y = "/"; break;   
        case "sus4": var y = "/"; break;
        case "7sus4": var y = "/"; break;
        case "add9": var y = "A2"; var [play] = useSound(Fadd9_A2, {volume:1}); break;
        case "7": var y = "bB2"; var [play] = useSound(C7_bB2, {volume:1}); break;
        case "aug": var y = "/"; break;   
        case "dim": var y = "bB2"; var [play] = useSound(Edim_bB2, {volume:1}); break;
        case "Par.m": var y = "/"; break;               
        default: var y = "/"; break;
      } break;


    default: var y = "/";  break;
  }
  if (y != "/") {
    return (
      <button 
        className="IV3"   type="button"   onMouseUp={() => play()}>
      {y}</button>
    );  } else {}
}

import F_C3 from './assets/C/1 IV/F/F_C3.mp3';
import FM7_C3 from './assets/C/1 IV/F M7/FM7_C3.mp3';
import Fadd9_C3 from './assets/C/1 IV/F add9/Fadd9_C3.mp3';
import C7_C3 from './assets/C/1 IV/C 7/C7_C3.mp3';
import Caug_C3 from './assets/C/1 IV/C aug/Caug_C3.mp3';
import bA_C3 from './assets/C/1 IV/bA/bA_C3.mp3';

export function IV4() {
  switch (Kye) {
    case "C": 
      switch (x) {
        case "Norm": var y = "C3"; [play] = useSound(F_C3, {volume:1}); break;  
        case "7th": var y = "C3"; [play] = useSound(FM7_C3, {volume:1}); break;   
        case "sus4": var y = "/"; break;
        case "7sus4": var y = "/"; break;
        case "add9": var y = "C3"; var [play] = useSound(Fadd9_C3, {volume:1}); break;
        case "7": var y = "C3"; var [play] = useSound(C7_C3, {volume:1}); break;
        case "aug": var y = "C3"; var [play] = useSound(Caug_C3, {volume:1}); break;
        case "dim": var y = "/"; break;
        case "Par.m": var y = "C3"; var [play] = useSound(bA_C3, {volume:1}); break;               
        default: var y = "/"; break;
      } break;


    default: var y = "/";  break;
  }
  if (y != "/") {
    return (
      <button 
        className="IV4"   type="button"   onMouseUp={() => play()}>
      {y}</button>
    );  } else {}
}

import Edim_bD2 from './assets/C/1 IV/bF dim/Edim_bD3.mp3';
import bA_bE3 from './assets/C/1 IV/bA/bA_bE3.mp3';

export function IV5() {
  switch (Kye) {
    case "C": 
      switch (x) {
        case "Norm": var y = "/"; break;  
        case "7th": var y = "/"; ; break;   
        case "sus4": var y = "/"; break;
        case "7sus4": var y = "/"; break;
        case "add9": var y = "/"; ; break;
        case "7": var y = "/"; ; break;
        case "aug": var y = "/"; break;
        case "dim": var y = "_bD2"; var [play] = useSound(Edim_bD2, {volume:1}); break; 
        case "Par.m": var y = "bE3"; var [play] = useSound(bA_bE3, {volume:1}); break;               
        default: var y = "/"; break;
      } break;


    default: var y = "/";  break;
  }
  if (y != "/") {
    return (
      <button 
        className="IV5"   type="button"   onMouseUp={() => play()}>
      {y}</button>
    );  } else {}
}
