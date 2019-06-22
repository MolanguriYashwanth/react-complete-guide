// import React, { useState } from 'react';

//Inorder to use this for a method for event handling use
// arrow function syntax as normal function considers this as event
import React, { Component } from "react"
import './App.css';
import Radium ,{StyleRoot}from 'radium';
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'sai', age: 23 },
      { id: 2, name: 'vamsi', age: 24 },
      { id: 3, name: 'vamsi', age: 24 }
    ],
    showPersons: false
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'vamsi krishna', age: 24 }
      ]
    })
    console.log("Button Clicked")
  }

  changeNameHandler = (event,id) => {

    let personIndex = this.state.persons.findIndex((p)=>p.id===id);

    //let changedPerson = {...this.state.persons[personIndex]};
    
    let changedPerson = Object.assign({},this.state.persons[personIndex])

    changedPerson.name = event.target.value;

    let personsCopy = [...this.state.persons];
    
    personsCopy[personIndex] = changedPerson;

    this.setState({
      persons: personsCopy
    })
  }

  toggleEventHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })

  }

  deletePersonHandler = (personIndex) => {
    //let currentPersons = this.state.persons.slice();
    let currentPersons = [...this.state.persons]
    currentPersons.splice(personIndex, 1);
    this.setState({ persons: currentPersons })

  }
  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event)=>this.changeNameHandler(event,person.id)}
              age={person.age} />
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name}
            changed={this.changeNameHandler}
            click={this.switchNameHandler.bind(this, 'Sai Yashwanth Molanguri!!')}
            age={this.state.persons[1].age}>My Hobbies playing cricket</Person> */}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor:'salmon',
        color:'black'
      }
    }
    let classes =[];
    if(this.state.persons.length<=2){
      classes = ['red']
    }
    if(this.state.persons.length<=1){
      classes = ['red','bold']
    }
    return (
      <StyleRoot>
      <div className="App">
        <h1>
          Hello, I am react App
        </h1>
        <p className={classes.join(' ')}>This is really working</p>
        {/* <button onClick={this.switchNameHandler.bind(this,'Sai Yashwanth !')}>Switch State</button> */}
        <button
          style={style}
          //onClick={() => this.switchNameHandler('Sai Yashwanth!!@')}
          onClick={this.toggleEventHandler}
        >Switch State</button>
        {persons}
      </div>
      </StyleRoot>
    );
    //  return  React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello, I\'m React App'));

  }
}

// const App = props => {

//   const switchNameHandler = (newName) => {
//     setPersonState({
//       persons: [
//         { name: newName, age: 23 },
//         { name: 'vamsi krishna', age: 26 }
//       ],
//       otherState: personState.otherState
//     })
//   }

//   const [personState, setPersonState] = useState(
//     {
//       persons: [
//         { name: 'sai', age: 23 },
//         { name: 'vamsi', age: 24 }
//       ],
//       otherState: "test state"
//     }
//   )

//   return (
//     <div className="App">
//       <h1>
//         Hello, I am react App
//       </h1>
//       {/* <button onClick={switchNameHandler.bind(this,'sai Yashwanth')}>Switch State</button> */}
//       <button onClick={() => switchNameHandler('sai Yashwanth !!')}>Switch State</button>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//       <Person name={personState.persons[1].name}
//         click={switchNameHandler.bind(this, 'molanguri sai yashwanth')}
//         age={personState.persons[1].age}>My Hobbies playing cricket</Person>
//     </div>
//   );
// }

export default Radium(App);
