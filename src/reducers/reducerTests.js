import { ADD_TEST } from "../actions/constants";

const initialState = [];

const testsSelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEST:
      const hasTest = state.some(
        t => t.Abbreviation === action.payload.Abbreviation
      );
      console.log(
        `
          Action payload = ${JSON.stringify(action.payload.Abbreviation)}
          Global state = ${JSON.stringify(state.map(t => t.Abbreviation))}
          Result of hasTest = ${hasTest}
        `
      );
      return hasTest
        ? state.filter(t => t.Abbreviation !== action.payload.Abbreviation)
        : [...state, action.payload];

    default:
      return state;
  }
};

export default testsSelectedReducer;
