import React, { Component } from "react";
import "./Person.css";
import PropTypes from "prop-types"
import Radium from 'radium';
import WithClass from "../../../hoc/WithClass";
import AuthContext from "../../../context/auth-context";
class Person extends Component {

    constructor(props) {
        super(props);
        this.refElement2 = React.createRef();
    }

    static contextType = AuthContext;
    componentDidMount() {
        //this.refElement.focus();
        this.refElement2.current.focus();
        console.log(this.context.authenticated);

    }
    render() {
        console.log('[Person.js is rendering...');
        const style = {
            '@media (min-width: 800px)': {
                width: '750px'
            }
        }
        return (<WithClass classes="Person" styles={style}>
                {/* <AuthContext.Consumer>
                    {context => 
                         context.authenticated ? <p>User Authenticated</p> : <p>User Not Authenticated</p> 
                    }
                </AuthContext.Consumer> */}
                {this.context.authenticated ? <p>User Authenticated</p> : <p>User Not Authenticated</p> }

                        <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text"
                    // ref={(element)=>{this.refElement=element}}
                    ref={this.refElement2}
                    onChange={this.props.changed} value={this.props.name} />
            </WithClass>)
              
    }


}
Person.propTypes = {
    click: PropTypes.func,
    age: PropTypes.number
};
//const person = (props) => {



export default Radium(Person)