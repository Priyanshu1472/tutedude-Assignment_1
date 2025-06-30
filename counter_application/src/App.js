import React from 'react';
import './App.css';
import FunctionCounter from './components/FunctionCounter';
import ClassCounter from './components/ClassCounter'; 

function App() {
  return (
    <>
      <div className="App">
        <h1>Assignment-2 Counter Application</h1>
        <div className="counters">
          <FunctionCounter />
          <ClassCounter />
        </div>
      </div>
    </>
  );
}

export default App;
