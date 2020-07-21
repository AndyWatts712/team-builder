import React from 'react';
import './App.css';
import TeamList from './components/TeamList';
import data from './data';

function App() {
  return (
    <div className="App">
      <h1>Team List</h1>
      <TeamList />
    </div>
  );
}

export default App;
