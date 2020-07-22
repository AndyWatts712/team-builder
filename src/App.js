import React, { useState, useEffect } from 'react';
import './App.css';
import TeamList from './components/TeamList';
import data from './data';
import Form from './components/Form';

const initialTeamData = [
  {name: '',
  email: ''
},
]

const initialFormValues = {
  name: '',
  email: ''
}

function App() {


  const[teamData, setTeamData] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = { ...formValues, [inputName]: inputValue }
    setFormValues(updatedFormValues)
  }
  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim()
    }
    setTeamData([newTeamMember, ...teamData])
  }
  useEffect(() => {
    setTeamData(data)
  }, [])
  
  console.log(teamData)

  return (
    <div className="App">
      <h1>Team List</h1>
      <Form update = {updateForm} values={formValues} submit={submitForm}/>
      <TeamList teamData = {teamData}/>
    </div>
  );
}

export default App;
