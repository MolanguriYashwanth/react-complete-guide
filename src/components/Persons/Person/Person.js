

// With out using Radium node module,
//  we can directly update webpack config css-loader to have the following
// use: getStyleLoaders({
//     importLoaders: 1,
//     modules: true,
//     localIdentName: '[name]__[local]__[hash:base64:5]'
// })
import React from "react";
import "./Person.css";
import Radium from 'radium';
const person = (props) => {
    const style = {
        '@media (min-width: 800px)': {
            width: '750px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p>Sai</p>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>)
}

export default Radium(person)