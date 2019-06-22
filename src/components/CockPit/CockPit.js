import React from "react";
import Radium from 'radium';
import "./CockPit.css";

const cockPit = (props) => {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
      }
      if (props.showPersons) {
        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        }
      }


    let classes = [];
    if (props.persons.length <= 2) {
      classes = ['red']
    }
    if (props.persons.length <= 1) {
      classes = ['red', 'bold']
    }
    return(
    <div>
        <h1>
            Hello, I am react App
        </h1>
        <p className={classes.join(' ')}>This is really working</p>
        {/* <button onClick={this.switchNameHandler.bind(this,'Sai Yashwanth !')}>Switch State</button> */}
        <button
            style={style}
            //onClick={() => this.switchNameHandler('Sai Yashwanth!!@')}
            onClick={props.toggleEventHandler}
        >Switch State</button>
    </div>)
}

export default Radium(cockPit);