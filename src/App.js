import React from 'react';
import './App.css';
import ContactPicker from './Components/ContactPicker'; // Import the ContactPicker component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact Picker App</h1>
        <ContactPicker /> 
      </header>
    </div>
  );
}

export default App;
