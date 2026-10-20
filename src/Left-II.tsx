import "./Left.css";
import useSound from 'use-sound';
import { x } from "./Right";

var Kye : string = "C";


var color : string = Kye;

import C_E2 from './assets/C/2 I/C/C_E2.mp3';
import Csus4_F2 from './assets/C/2 I/C sus4/Csus4_F2.mp3';
import Cadd9_E2 from './assets/C/2 I/C add9/Cadd9_E2.mp3';
import G7_F2 from './assets/C/2 I/G 7/G7_F2.mp3';
import Gaug_E2 from './assets/C/2 I/G aug/Gaug_E2.mp3';

export function I1() {
  switch (Kye) {
    case "C": 
      switch (x) {
        case "Norm": var y = "E2"; var [play] = useSound(C_E2, {volume:1}); break;
        case "7th": var y = "/"; break;
        case "sus4": var y = "F2"; var [play] = useSound(Csus4_F2, {volume:1}); break;
        case "7sus4": var y = "/"; break;
        case "add9": var y = "E2"; var [play] = useSound(Cadd9_E2, {volume:1}); break;
        case "7": var y = "F2"; var [play] = useSound(G7_F2, {volume:1}); break;
        case "aug": var y = "E2"; var [play] = useSound(Gaug_E2, {volume:1}); break;   
        case "dim": var y = "/"; break;
        case "Par.m": var y = "/"; break;                
        default: var y = "/"; break;
      } break;


    default: var y = "/"; break;
  }
  if (y != "/") {
    return (
      <button 
        className={color}   type="button"   onMouseUp={() => play()}>
      {y}</button>
    );  }
  else {
    return (
      <button 
        className="hid"   type="button"   style={{ visibility: 'hidden' }}>
      {y}</button>
    );
  }
}

import C_G2 from './assets/C/2 I/C/C_G2.mp3';
import CM7_G2 from './assets/C/2 I/C M7/CM7_G2.mp3';
import Csus4_G2 from './assets/C/2 I/C sus4/Csus4_G2.mp3';
import Cadd9_G2 from './assets/C/2 I/C add9/Cadd9_G2.mp3';
import G7_G2 from './assets/C/2 I/G 7/G7_G2.mp3';
import Gaug_bA2 from './assets/C/2 I/G aug/Gaug_bA2.mp3';
import Bdim_bA2 from './assets/C/2 I/bC dim/Bdim_bA2.mp3';
import bE_G2 from './assets/C/2 I/bE/bE_G2.mp3';

export function I2() {
  switch (Kye) {
    case "C": 
      switch (x) {
        case "Norm": var y = "G2"; var [play] = useSound(C_G2, {volume:1}); break;  
        case "7th": var y = "G2"; var [play] = useSound(CM7_G2, {volume:1}); break;  
        case "sus4": var y = "G2"; var [play] = useSound(Csus4_G2, {volume:1}); break;
        case "7sus4": var y = "/"; break;
        case "add9": var y = "G2"; var [play] = useSound(Cadd9_G2, {volume:1}); break;
        case "7": var y = "G2"; var [play] = useSound(G7_G2, {volume:1}); break;
        case "aug": var y = "bA2"; var [play] = useSound(Gaug_bA2, {volume:1}); break;   
        case "dim": var y = "bA2"; var [play] = useSound(Bdim_bA2, {volume:1}); break;
        case "Par.m": var y = "G2"; var [play] = useSound(bE_G2, {volume:1}); break;               
        default: var y = "/"; break;
      } break;


    default: var y = "/";  break;
  }
  if (y != "/") {
    return (
      <button 
        className={color}   type="button"   onMouseUp={() => play()}>
      {y}</button>
    );  }
  else {
    return (
      <button 
        className="hid"   type="button"   style={{ visibility: 'hidden' }}>
      {y}</button>
    );
  }
}
import F_A2 from './assets/C/1 IV/F/F_A2.mp3';
import Fadd9_A2 from './assets/C/1 IV/F add9/Fadd9_A2.mp3';
import C7_bB2 from './assets/C/1 IV/C 7/C7_bB2.mp3';
import Edim_bB2 from './assets/C/1 IV/bF dim/Edim_bB2.mp3';

export function I3() {
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
        className={color}   type="button"   onMouseUp={() => play()}>
      {y}</button>
    );  }
  else {
    return (
      <button 
        className="hid"   type="button"   style={{ visibility: 'hidden' }}>
      {y}</button>
    );
  }
}

import F_C3 from './assets/C/1 IV/F/F_C3.mp3';
import FM7_C3 from './assets/C/1 IV/F M7/FM7_C3.mp3';
import Fadd9_C3 from './assets/C/1 IV/F add9/Fadd9_C3.mp3';
import C7_C3 from './assets/C/1 IV/C 7/C7_C3.mp3';
import Caug_C3 from './assets/C/1 IV/C aug/Caug_C3.mp3';
import bA_C3 from './assets/C/1 IV/bA/bA_C3.mp3';

export function I4() {
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
        className={color}   type="button"   onMouseUp={() => play()}>
      {y}</button>
    );  }
  else {
    return (
      <button 
        className="hid"   type="button"   style={{ visibility: 'hidden' }}>
      {y}</button>
    );
  }
}

import Edim_bD2 from './assets/C/1 IV/bF dim/Edim_bD3.mp3';
import bA_bE3 from './assets/C/1 IV/bA/bA_bE3.mp3';

export function I5() {
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
        className={color}   type="button"   onMouseUp={() => play()}>
      {y}</button>
    );  }
  else {
    return (
      <button 
        className="hid"   type="button"   style={{ visibility: 'hidden' }}>
      {y}</button>
    );
  }
}
