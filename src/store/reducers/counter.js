import * as actionTypes from "../actions";

//initial state
const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_1:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionTypes.ADD_5:
      return {
        ...state,
        counter: state.counter + 5
      };
    case actionTypes.SUB_1:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.SUB_5:
      return {
        ...state,
        counter: state.counter - 5
      };
  }
  return state;
};

export default reducer;
