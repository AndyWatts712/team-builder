import React, { useState, useEffect } from 'react';
import './App.css';
import TeamList from './components/TeamList';
import data from './data';
import Form from './components/Form';

function App() {
  const[teamData, setTeamData] = useState([])
  
  useEffect(() => {
    setTeamData(data)
  }, [])
  
  console.log(teamData)

  return (
    <div className="App">
      <h1>Team List</h1>
      <Form />
      <TeamList teamData = {teamData}/>
    </div>
  );
}

export default App;
