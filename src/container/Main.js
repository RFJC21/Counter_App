import React, { Component } from "react";
import Button from "../components/Button/Button";
import CounterOutput from "../components/Counter_Output/CounterOutput";
import * as actionTypes from "../store/actions";
import { connect } from "react-redux";
import classes from "./Main.css";
import {Route, Switch} from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        
        <CounterOutput value={this.props.ctr} />
        <Button clicked={this.props.onAdd1Counter}>Add 1</Button>
        <Button clicked={this.props.onAdd5Counter}>Add 5</Button>
        <Button clicked={this.props.onSub1Counter}>Sub 1</Button>
        <Button clicked={this.props.onSub5Counter}>Sub 5</Button>
        <button
          onClick={() => this.props.onSaveResult(this.props.ctr)}
          className={classes.Button}
        >
          Store result
        </button>
        <ul>
          {this.props.storedResults.map(strResult => (
            <li key={strResult.id}>{strResult.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

//value of counter in our global state, and give it
//to me in the form of props called ctr
const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

//what kind of action do i want to dispatch in this
//container?
const mapDispatchToProps = dispatch => {
  return {
    onAdd1Counter: () => dispatch({ type: actionTypes.ADD_1 }),
    onAdd5Counter: () => dispatch({ type: actionTypes.ADD_5 }),
    onSub1Counter: () => dispatch({ type: actionTypes.SUB_1 }),
    onSub5Counter: () => dispatch({ type: actionTypes.SUB_5 }),
    onSaveResult: result =>
      dispatch({ type: actionTypes.SAVE_RESULT, result: result })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
