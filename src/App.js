import React from 'react';
import Hero from './Components/hero';
import './App.css';
import Room3D from  './Components/floorplan';

function App() {
  const containerRef = React.createRef();
  return (
    <div>
    <div><Hero /></div>
    <div ref={containerRef}><Room3D containerRef={containerRef}/></div>
    </div>
  );
}

export default App;
