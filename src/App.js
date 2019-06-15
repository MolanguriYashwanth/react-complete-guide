// import React, { useState } from 'react';

//Inorder to use this for a method for event handling use
// arrow function syntax as normal function considers this as event
import React, { Component } from "react"
import './App.css';
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: 'sai', age: 23 },
      { name: 'vamsi', age: 24 }
    ]
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

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: 'sai yashwanth', age: 23 },
        { name: event.target.value, age: 24 }
      ]
    })
    console.log("Button Clicked")
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>
          Hello, I am react App
        </h1>
        {/* <button onClick={this.switchNameHandler.bind(this,'Sai Yashwanth !')}>Switch State</button> */}
        <button
          style={style}
          onClick={() => this.switchNameHandler('Sai Yashwanth!!@')}>Switch State</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name}
          changed={this.changeNameHandler}
          click={this.switchNameHandler.bind(this, 'Sai Yashwanth Molanguri!!')}
          age={this.state.persons[1].age}>My Hobbies playing cricket</Person>
      </div>
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

export default App;
