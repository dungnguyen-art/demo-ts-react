import React from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: 'Sub',
    last: 'Wallet'
  }
  const personList = [
    {
      first: 'Tom',
      last: 'Heaton'
    },
    {
      first: 'Anthony',
      last: 'Martial'
    },
    {
      first: 'Alejandro',
      last: 'Garnacho'
    },
    {
      first: 'Jadon',
      last: 'Sancho'
    }

  ]
  return (
    <div className="App">
      <Greet
        name="Dung Nguyen"
        age={15}
        gender={false}
        face={149}
        school={"Hanoi"}
      />
      <Person name={personName}/>
      <PersonList names = {personList}/>
    </div>
  );
}

export default App;
 