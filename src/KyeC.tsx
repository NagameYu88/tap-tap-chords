import "./KyeC.css";
import useSound from 'use-sound';

import CM_E3 from './assets/chords/Major/C/2 _E3.mp3';
import Dsus2_E3 from './assets/chords/sus2/D/2 _E3.mp3';
import Em_E3 from './assets/chords/minor/E/2 _E3.mp3';
import FM_F3 from './assets/chords/Major/F/2 _F3.mp3';
import Gsus4_D3 from './assets/chords/sus4/G/1 _D3.mp3';
import Am_E3 from './assets/chords/minor/A/2 _E3.mp3';
import BbM_D3 from './assets/chords/Major/Bb/1 _D3.mp3';


export function CMonE3() {
  const [play] = useSound(CM_E3, {volume:0.5});
  return (
    <button 
      className="CM_E3" 
      type="button" 
      onMouseUp={() => play()} >
    C </button>
  );}

export function Dsus2onE3() {
  const [play] = useSound(Dsus2_E3, {volume:0.5});
  return (
    <button 
      className="Dsus2_E3" 
      type="button" 
      onMouseUp={() => play()} >
    Dsus2 </button>
  );}

export function EmonE3() {
  const [play] = useSound(Em_E3, {volume:0.5});
  return (
    <button 
      className="Em_E3" 
      type="button" 
      onMouseUp={() => play()} >
    Em </button>
  );}

export function FMonF3() {
  const [play] = useSound(FM_F3, {volume:0.5});
  return (
    <button 
      className="FM_F3" 
      type="button" 
      onMouseUp={() => play()} >
    F </button>
  );}

export function Gsus4onD3() {
  const [play] = useSound(Gsus4_D3, {volume:0.5});
  return (
    <button 
      className="Gsus4_D3" 
      type="button" 
      onMouseUp={() => play()} >
    Gsus4 </button>
  );}

export function AmonE3() {
  const [play] = useSound(Am_E3, {volume:0.5});
  return (
    <button 
      className="Am_E3" 
      type="button" 
      onMouseUp={() => play()} >
    Am </button>
  );}

export function BbMonD3() {
  const [play] = useSound(BbM_D3, {volume:0.5});
  return (
    <button 
      className="BbM_D3" 
      type="button" 
      onMouseUp={() => play()} >
    Bb </button>
  );}
  