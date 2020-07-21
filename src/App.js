import React, { useState, useEffect } from 'react';
import './App.css';
import TeamList from './components/TeamList';
import data from './data';

function App() {
  const[teamData, setTeamData] = useState([])
  
  useEffect(() => {
    setTeamData(data)
  }, [])
  
  console.log(teamData)

  return (
    <div className="App">
      <h1>Team List</h1>
      <TeamList teamData = {teamData}/>
    </div>
  );
}

export default App;
