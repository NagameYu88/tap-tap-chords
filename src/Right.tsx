import "./Right.css";

var x = "Norm";

export function Norm() {
    return (
      <button 
        className="five"   type="button"   
        onMouseDown={() => { var x : string= "Norm"; }} >
      M/m</button>
    );  }

export function Seventh() {
    return (
      <button 
        className="five"   type="button"   
        onMouseDown={() => { var x : string= "7th"; }} >
      M7/m7</button>
    );  }

export function Sus4() {
    return (
      <button 
        className="five"   type="button"   
        onMouseDown={() => { var x : string= "sus4"; }} >
      sus4</button>
    );  }

export function Seventhsus4() {
    return (
      <button 
        className="five"   type="button"   
        onMouseDown={() => { var x : string= "7sus4"; }} >
      7sus4</button>
    );  }

export function Add9() {
    return (
      <button 
        className="five"   type="button"   
        onMouseDown={() => { var x : string= "add9"; }} >
      add9</button>
    );  }

export function Dom() {
    return (
      <button 
        className="three"   type="button"   
        onMouseDown={() => { var x : string= "7"; }} >
      7</button>
    );  }

export function Aug() {
    return (
      <button 
        className="three"   type="button"   
        onMouseDown={() => { var x : string= "aug"; }} >
      aug</button>
    );  }

export function Dim() {
    return (
      <button 
        className="three"   type="button"   
        onMouseDown={() => { var x : string= "dim"; }} >
      dim</button>
    );  }

export function Par() {
    return (
      <button 
        className="one"   type="button"   
        onMouseDown={() => { var x : string= "Par.m"; }} >
      Pr.m</button>
    );  }


export { x };

export function White() {
    return (
      <button 
        className="white"   type="button"  style={{ visibility: 'hidden' }} >
      x</button>
    ); }

export function X() {
    return (
      <button 
        className="one"   type="button">
      {x}</button>
    ); }