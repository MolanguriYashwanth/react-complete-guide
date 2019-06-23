// import React, { useState } from 'react';

//Inorder to use this for a method for event handling use
// arrow function syntax as normal function considers this as event
import React, { Component } from "react"
import './App.css';
import { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import CockPit from "../components/CockPit/CockPit";
import withClassA from "../hoc/withClassA";
import AuthContext from "../context/auth-context";
class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 1, name: 'sai', age: 23 },
      { id: 2, name: 'vamsi', age: 24 },
      { id: 3, name: 'vamsi', age: 24 }
    ],
    showPersons: false,
    showCockPit:true,
    incrementCounter:0,
    authenticated:false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[state from derived]',state,props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] didMount');
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

  changeNameHandler = (event, id) => {

    let personIndex = this.state.persons.findIndex((p) => p.id === id);

    //let changedPerson = {...this.state.persons[personIndex]};

    let changedPerson = Object.assign({}, this.state.persons[personIndex])

    changedPerson.name = event.target.value;

    let personsCopy = [...this.state.persons];

    personsCopy[personIndex] = changedPerson;

    // this.setState({
    //   persons: personsCopy
    // })
    this.setState((prevState,props)=>{
      return {
            persons: personsCopy,
            incrementCounter:prevState.incrementCounter+1
      }
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
  loginHandler =()=>{
    this.setState({authenticated :true});
  }
  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            deletePersonHandler={this.deletePersonHandler}
            changeNameHandler={this.changeNameHandler}
          />
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name}
            changed={this.changeNameHandler}
            click={this.switchNameHandler.bind(this, 'Sai Yashwanth Molanguri!!')}
            age={this.state.persons[1].age}>My Hobbies playing cricket</Person> */}
        </div>
      );

    }

    return (
      <StyleRoot>
          <button onClick={()=>this.setState({showCockPit:false})}>hideCockPit</button>
          <AuthContext.Provider value={{authenticated:this.state.authenticated,login:this.loginHandler}}>
          {this.state.showCockPit ?
          <CockPit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            toggleEventHandler={this.toggleEventHandler}
            personsLength={this.state.persons.length}
          />:''}
          {persons}
          </AuthContext.Provider>
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

export default withClassA(App,"App");
