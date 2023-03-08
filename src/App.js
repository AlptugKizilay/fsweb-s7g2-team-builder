import logo from './logo.svg';
import { useState } from 'react';
import { ListGroup, ListGroupItem, Form, Label, Input, FormGroup } from "reactstrap";
import MemberForm from "./components/MemberForm"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const initialMembers = [
    {
      id: 1,
      name: "Alptug",
      role: "Backend",
      age: 27

    },
    {
      id: 2,
      name: "Coban",
      role: "Frontend",
      age: 30

    },
    {
      id: 3,
      name: "Enes",
      role: "Frontend",
      age: 31

    }
  ]
  const [teamMembers, setTeamMembers] = useState(initialMembers);


  return (
    <div className="App">
      <ListGroup>
        {teamMembers.map((e,index) => {
          return <ListGroupItem key={e.index}>{e.name}</ListGroupItem>
        })}
      </ListGroup>
<br />
      <MemberForm teamMembers={teamMembers} updateTeamList = {setTeamMembers}  />
      
    </div>
  );
}

export default App;
