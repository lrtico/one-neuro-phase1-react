/* eslint-disable import/no-named-as-default-member */
import C from '../actions/constants';

const initialState = [];

const testsSelectedReducer = (state = initialState, action) => {
  // console.log('start testsSelectedReducer fired ', state);
  switch (action.type) {
    case C.ADD_TEST:
      // const hasTest = state.some(
      //   t => t.Abbreviation === action.payload.Abbreviation
      // );
      // console.log(
      //   `
      //     Action payload = ${JSON.stringify(action.payload.Abbreviation)}
      //     Global state = ${JSON.stringify(state.map(t => t.Abbreviation))}
      //     Result of hasTest = ${hasTest}
      //   `
      // );
      // return hasTest
      //   ? state.filter(t => t.Abbreviation !== action.payload.Abbreviation)
      //   : [...state, action.payload];
      return [...state, action.payload];

    case C.REMOVE_TEST:
      return state.filter((t) => t.Abbreviation !== action.payload.Abbreviation);

    default:
      return state;
  }
};

export default testsSelectedReducer;

export const matchedTests = (state = [], action) => {
  switch (action.type) {
    case C.REMOVE_TESTS:
      return state.filter((t) => t.DomainName !== action.payload);

    case C.ADD_TESTS:
      return [...state, action.payload];

    default:
      return state;
  }
};

export const handleMatches = (state = [], action) => {
  if (action.type === C.HANDLE_MATCHES) {
    return action.payload;
  } else {
    return state;
  }
};
