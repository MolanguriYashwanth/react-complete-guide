import React from "react";
import Person from "./Person/Person";

const persons = (props) => 
    props.persons.map((person, index) => {
        return <Person name={person.name}
          click={() => props.deletePersonHandler(index)}
          key={person.id}
          changed={(event) => props.changeNameHandler(event, person.id)}
          age={person.age} />
      })

 export default persons;     