import { ADD_TEST } from "../actions/constants";

const initialState = {
  testsSelected: []
};

const testsSelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEST:
      return {
        ...state,
        testsSelected: [...state.testsSelected, action.payload]
      };
    default:
      return state;
  }
};

export default testsSelectedReducer;
