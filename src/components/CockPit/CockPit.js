import React, { useEffect, useRef ,useContext} from "react";
import Radium from 'radium';
import "./CockPit.css";
import Auxilary from "../../hoc/Auxilary";
import AuthContext from "../../context/auth-context";

const CockPit = (props) => {
  const btnRef = useRef(null);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    console.log('[CockPit.js] useEffect');
    // const timer = setTimeout(()=>{
    //   alert('Saved data to cloud');
    // },1000)
    btnRef.current.click();
    return () => {
      //clearTimeout(timer)
      console.log('[clean up in useEffect]');
    }
  }, []);
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
  if (props.personsLength <= 2) {
    classes = ['red']
  }
  if (props.personsLength <= 1) {
    classes = ['red', 'bold']
  }
  return (
    <Auxilary>
      <h1>
        {props.title}
      </h1>
      <p className={classes.join(' ')}>This is really working</p>
      {/* <button onClick={this.switchNameHandler.bind(this,'Sai Yashwanth !')}>Switch State</button> */}
      <button
        style={style}
        ref={btnRef}
        //onClick={() => this.switchNameHandler('Sai Yashwanth!!@')}
        onClick={props.toggleEventHandler}
      >Switch State</button>
      {/* <AuthContext.Consumer>
        {context =>
          <button onClick={context.login}>Login</button>
        }
      </AuthContext.Consumer> */}

          <button onClick={authContext.login}>Login</button>
      
    </Auxilary>)
}

export default React.memo(CockPit);