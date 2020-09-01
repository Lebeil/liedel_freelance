import React from 'react';
import Navbar from './Components/Navbar'
import './App.css';
import photo1 from './photos/home.jpg'
import photo2 from './photos/home2.jpg'

function App() {
  return (
    <div className="App">
      <Navbar/>
        <img src={photo1} alt="photo"/>
        <img src={photo2} alt="photo"/>
    </div>
  );
}

export default App;
