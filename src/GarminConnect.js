import React, { useEffect } from 'react';
import useState from 'react-usestateref'

import './App.css';

function App() {

  function initRun() {
    console.log('initRun()');
  }


  useEffect(() => {
    initRun();
  }, [])

  return (
    <div className="App">
      Garmin Connect
    </div>
  );
}

export default App;
