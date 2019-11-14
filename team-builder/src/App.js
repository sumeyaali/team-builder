import React, { useState } from 'react';
import './App.css';
import NotesForm from "./Components/NotesForm";
import Notes from "./Components/Notes";

function App() {
  const [team, setTeam] = useState([{}]);

const addNewMember = member => {
  const newMember = {
    id: Date.now(),
    firstName: member.firstName,
    lastName: member.lastName,
    email:member.email,
    location: member.location,
    role: member.role
  }
  setTeam([...team, newMember]);
}

  return (
    <div className="App">
      <h1>Join our Team! </h1>
    <NotesForm addNewMember = {addNewMember}/>
    <Notes team = {team} />
    </div>
  );
}

export default App;
