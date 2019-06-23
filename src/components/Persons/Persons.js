import React,{Component} from "react";
import Person from "./Person/Person";

//const persons = (props) => {
class Persons extends Component{   
    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps',state,props)
    //     return state;
    // }
    shouldComponentUpdate(nextProps,nextState){
        console.log('[Persons.js] shouldComponentUpdate')
        return (nextProps.persons!==this.props.persons);
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[Persons.js] componentDidUpdate');
    }
    render(){
        console.log('[Persons.js] render');
        return this.props.persons.map((person, index) => {
            return (<Person name={person.name}
                click={() => this.props.deletePersonHandler(index)}
                key={person.id}
                changed={(event) => this.props.changeNameHandler(event, person.id)}
                age={person.age} />)
        })
    }
 
}

export default Persons;     